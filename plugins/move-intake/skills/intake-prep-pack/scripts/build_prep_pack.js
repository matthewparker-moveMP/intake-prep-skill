// Build an intake prep pack .docx from a JSON content file.
// Usage: node build_prep_pack.js <content.json> <output.docx>
// Run `npm install docx` in this directory first if needed.
//
// JSON shape:
// {
//   "title": "Intake Prep Pack - <Company> - <Role>",
//   "subtitle": "Move · <meeting line>",
//   "intro": "One short orientation paragraph.",
//   "sections": [
//     { "heading": "1. The meeting", "blocks": [ <block>, ... ] }, ...
//   ]
// }
// Block types:
//   {"type":"p","text":"..."}                      plain paragraph
//   {"type":"p","runs":[{"t":"bold","b":true},{"t":" rest"}]}   rich paragraph
//   A run with "url" becomes a clickable hyperlink: {"t":"Northwind careers page","url":"https://..."}
//   Runs work in p, bullet, num, q (text/follow/listen stay plain strings) and hyp blocks.
//   {"type":"bullet","lead":"When:","text":"..."}  bullet with optional bold lead
//   {"type":"bullet","runs":[...]}                 bullet with rich runs
//   {"type":"num","lead":"...","text":"...","ref":"anchors"}  numbered item (ref optional)
//   {"type":"sub","text":"Shape and seniority"}    bold sub-heading
//   {"type":"q","text":"question","follow":"...","listen":"..."}  lead question, with an
//        indented "Follow:" prompt and an italic "Listen for" note (both optional)
//   {"type":"hyp","text":"I think the business needs X, and this team is being asked to deliver Y."}
//        shaded hypothesis box for the recruiter to play back on the call
//   {"type":"flag","label":"The #1 flag:","text":"..."}  coloured inline flag paragraph

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
        HeadingLevel, BorderStyle, ExternalHyperlink, ShadingType } = require("docx");

const ACCENT = "2E75B6", FLAGC = "B23B2E";
const [,, inPath, outPath] = process.argv;
if (!inPath || !outPath) { console.error("Usage: node build_prep_pack.js <content.json> <output.docx>"); process.exit(1); }
const data = JSON.parse(fs.readFileSync(inPath, "utf8"));

const t = (text, o) => new TextRun(Object.assign({ text }, o || {}));
const runsFrom = (arr) => arr.map(r => r.url
  ? new ExternalHyperlink({ link: r.url, children: [t(r.t, { bold: !!r.b, italics: !!r.i, color: "0563C1", underline: {} })] })
  : t(r.t, { bold: !!r.b, italics: !!r.i, color: r.c }));

function blockToPara(b) {
  switch (b.type) {
    case "sub":
      return new Paragraph({ spacing: { before: 90, after: 30 }, children: [t(b.text, { bold: true })] });
    case "flag":
      return new Paragraph({ spacing: { after: 80 }, children: [
        t(b.label + " ", { bold: true, color: FLAGC }), t(b.text) ] });
    case "bullet":
      return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 50 },
        children: b.runs ? runsFrom(b.runs) : [ ...(b.lead ? [t(b.lead + " ", { bold: true })] : []), t(b.text || "") ] });
    case "num":
      return new Paragraph({ numbering: { reference: b.ref || "numbers", level: 0 }, spacing: { after: 55 },
        children: b.runs ? runsFrom(b.runs) : [ ...(b.lead ? [t(b.lead + " ", { bold: true })] : []), t(b.text || "") ] });
    case "q": {
      const paras = [new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 30 },
        children: b.runs ? runsFrom(b.runs) : [t(b.text, { bold: true })] })];
      if (b.follow) paras.push(new Paragraph({ indent: { left: 620 }, spacing: { after: 30 }, children: [
        t("Follow: ", { bold: true, color: ACCENT }), t(b.follow) ] }));
      if (b.listen) paras.push(new Paragraph({ indent: { left: 620 }, spacing: { after: 70 }, children: [
        t("Listen for: " + b.listen, { italics: true, color: "555555" }) ] }));
      return paras;
    }
    case "hyp":
      return new Paragraph({ spacing: { before: 60, after: 100 }, indent: { left: 120, right: 120 },
        shading: { type: ShadingType.CLEAR, color: "auto", fill: "EEF4FA" },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 6 } },
        children: [t("Hypothesis to play back: ", { bold: true }), ...(b.runs ? runsFrom(b.runs) : [t(b.text || "", { italics: true })])] });
    case "p":
    default:
      return new Paragraph({ spacing: { after: 80 }, children: b.runs ? runsFrom(b.runs) : [t(b.text || "")] });
  }
}

const children = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(data.title || "Intake Prep Pack")] }),
];
if (data.subtitle) children.push(new Paragraph({ spacing: { after: 40 }, children: [t(data.subtitle, { italics: true, color: "666666" })] }));
if (data.intro) children.push(new Paragraph({ spacing: { after: 120 }, children: [t(data.intro, { color: "444444" })] }));
for (const s of (data.sections || [])) {
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(s.heading)] }));
  for (const b of (s.blocks || [])) children.push(...[].concat(blockToPara(b)));
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 19 }, paragraph: { spacing: { line: 262, lineRule: "auto" } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: "1A1A1A" },
        paragraph: { spacing: { before: 0, after: 40 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, font: "Arial", color: ACCENT },
        paragraph: { spacing: { before: 200, after: 70 }, outlineLevel: 1,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD", space: 2 } } } },
    ],
  },
  numbering: { config: [
    { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] },
    { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] },
    { reference: "anchors", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] },
  ] },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } }, children }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(outPath, buf); console.log("wrote " + outPath); });
