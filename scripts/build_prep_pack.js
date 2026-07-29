// Build an intake prep pack .docx from a JSON content file.
// Usage: node build_prep_pack.js <content.json> <output.docx>
// Run `npm install docx` in this directory first if needed.
//
// JSON shape:
// {
//   "title": "Sourcing Plan: <Company> - <Role Title>",
//   "subtitle": "<Team or org> · <meeting line>",
//   "intro": "One short orientation paragraph.",
//   "sections": [
//     { "heading": "1. The meeting", "blocks": [ <block>, ... ] }, ...
//   ]
// }
// Block types:
//   {"type":"p","text":"..."}                      plain paragraph
//   {"type":"p","runs":[{"t":"bold","b":true},{"t":" rest"}]}   rich paragraph
//   {"type":"bullet","lead":"When:","text":"..."}  bullet with optional bold lead
//   {"type":"bullet","runs":[...]}                 bullet with rich runs
//   {"type":"num","lead":"...","text":"...","ref":"anchors"}  numbered item (ref optional)
//   {"type":"sub","text":"Shape and seniority"}    bold sub-heading
//   {"type":"q","text":"question","listen":"..."}  bulleted question + italic "Listen for"
//   {"type":"flag","label":"The #1 flag —","text":"..."}  coloured inline flag paragraph

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType, LevelFormat,
        HeadingLevel, BorderStyle } = require("docx");

const ACCENT = "2E75B6", FLAGC = "B23B2E";
const [,, inPath, outPath] = process.argv;
if (!inPath || !outPath) { console.error("Usage: node build_prep_pack.js <content.json> <output.docx>"); process.exit(1); }
const data = JSON.parse(fs.readFileSync(inPath, "utf8"));

const LINKC = "0563C1";
const URL_RE = /(https?:\/\/[^\s]+|(?:www\.)?linkedin\.com\/[^\s]+)/gi;
const TRAIL_RE = /[.,;:!?)\]]+$/;

const t = (text, o) => new TextRun(Object.assign({ text }, o || {}));

function hyper(url, o) {
  const clean = (url || "").replace(TRAIL_RE, "");
  const trail = url.slice(clean.length);
  const href = /^https?:\/\//i.test(clean) ? clean : "https://" + clean;
  const run = new ExternalHyperlink({ link: href,
    children: [ new TextRun(Object.assign({ text: clean }, o || {}, { color: LINKC, underline: {} })) ] });
  return trail ? [run, t(trail, o)] : [run];
}

// Split plain text into text + ExternalHyperlink runs, auto-linkifying URLs and bare linkedin.com links.
function linkify(text, o) {
  if (!text) return [t(text || "", o)];
  const out = []; let last = 0, m; URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(text))) {
    if (m.index > last) out.push(t(text.slice(last, m.index), o));
    out.push(...hyper(m[0], o));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(t(text.slice(last), o));
  return out.length ? out : [t(text, o)];
}

// Rich runs: an explicit {link} wraps the run in a hyperlink; otherwise the run text is auto-linkified.
const runsFrom = (arr) => arr.flatMap(r => {
  const o = { bold: !!r.b, italics: !!r.i, color: r.c };
  if (r.link) return [ new ExternalHyperlink({ link: r.link,
    children: [ new TextRun(Object.assign({ text: r.t }, o, { color: LINKC, underline: {} })) ] }) ];
  return linkify(r.t, o);
});

function blockToPara(b) {
  switch (b.type) {
    case "sub":
      return new Paragraph({ spacing: { before: 90, after: 30 }, children: [t(b.text, { bold: true })] });
    case "flag":
      return new Paragraph({ spacing: { after: 80 }, children: [
        t(b.label + " ", { bold: true, color: FLAGC }), ...linkify(b.text) ] });
    case "bullet":
      return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 50 },
        children: b.runs ? runsFrom(b.runs) : [ ...(b.lead ? [t(b.lead + " ", { bold: true })] : []), ...linkify(b.text || "") ] });
    case "num":
      return new Paragraph({ numbering: { reference: b.ref || "numbers", level: 0 }, spacing: { after: 55 },
        children: b.runs ? runsFrom(b.runs) : [ ...(b.lead ? [t(b.lead + " ", { bold: true })] : []), ...linkify(b.text || "") ] });
    case "q":
      return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: [
        ...linkify(b.text), ...(b.listen ? linkify("  Listen for: " + b.listen, { italics: true, color: "555555" }) : []) ] });
    case "p":
    default:
      return new Paragraph({ spacing: { after: 80 }, children: b.runs ? runsFrom(b.runs) : linkify(b.text || "") });
  }
}

const children = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(data.title || "Sourcing Plan")] }),
];
if (data.subtitle) children.push(new Paragraph({ spacing: { after: 40 }, children: [t(data.subtitle, { italics: true, color: "666666" })] }));
if (data.intro) children.push(new Paragraph({ spacing: { after: 120 }, children: [t(data.intro, { color: "444444" })] }));
for (const s of (data.sections || [])) {
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(s.heading)] }));
  for (const b of (s.blocks || [])) children.push(blockToPara(b));
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
