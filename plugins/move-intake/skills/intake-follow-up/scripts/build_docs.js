// Build the intake follow-up Word documents from a JSON content file.
// Usage: node build_docs.js <content.json> <output.docx>
// Run `npm install docx` in this directory first if needed.
//
// Two layouts.
//
// 1. "layout": "summary"  (the HM summary, Move intake notes format)
// {
//   "layout": "summary",
//   "title": "Intake Notes - <Client> - <Role>",
//   "rows": [
//     { "section": "The business and the team",
//       "prompts": ["What is the business trying to achieve this year?", "..."],
//       "blocks": [ <block>, ... ] },
//     ...
//   ]
// }
// Each row renders as one table row: the section name and its prompts on the
// left, the recruiter's read on the right.
//
// 2. "layout": "doc"  (the JD and the recruiter screen; the default)
// {
//   "layout": "doc",
//   "title": "Recruiter Screen - <Client> - <Role>",
//   "subtitle": "Move · first-round call · 30 minutes",   (optional)
//   "font": "Arial", "size": 20,                          (optional, size in half-points)
//   "sections": [ { "heading": "1. The basics", "blocks": [ <block>, ... ] }, ... ]
// }
//
// Blocks (both layouts):
//   {"type":"p","text":"..."}                          plain paragraph
//   {"type":"p","runs":[{"t":"bold","b":true},{"t":" rest"}]}   rich paragraph
//      A run with "url" becomes a clickable hyperlink: {"t":"Northwind careers page","url":"https://..."}
//      A run with "i":true is italic. Runs work in p, bullet, num and callout blocks.
//   {"type":"sub","text":"Where the team sits"}        bold sub-heading
//   {"type":"bullet","lead":"When:","text":"..."}      bullet with optional bold lead
//   {"type":"bullet","runs":[...]}                     bullet with rich runs
//   {"type":"num","lead":"...","text":"..."}           numbered item
//   {"type":"quote","text":"...","who":"Sam Okafor"}   italic quote with attribution
//   {"type":"confirm","text":"what we still need, and why"} bullet rendered as [TO CONFIRM: ...]
//   {"type":"flag","label":"Not for candidates:","text":"..."}  coloured inline flag
//   {"type":"callout","title":"Read this first.","text":"..."}  shaded box (runs allowed)
//   {"type":"q","text":"lead question","follow":"...","listen":"..."}  question with prompts
//   {"type":"table","header":["Gate","How to ask","Pass","Stop"],
//        "rows":[["cell","cell","cell","cell"], ...], "widths":[18,42,20,20]}
//      Cells are strings or arrays of runs. Widths are percentages.

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, HeadingLevel,
        BorderStyle, ExternalHyperlink, ShadingType, Table, TableRow, TableCell,
        WidthType, VerticalAlign } = require("docx");

const ACCENT = "2E75B6", FLAGC = "B23B2E", LINK = "0563C1";
const [,, inPath, outPath] = process.argv;
if (!inPath || !outPath) { console.error("Usage: node build_docs.js <content.json> <output.docx>"); process.exit(1); }
const data = JSON.parse(fs.readFileSync(inPath, "utf8"));
const isSummary = data.layout === "summary";

const FONT = data.font || (isSummary ? "Helvetica Neue" : "Arial");
const SIZE = data.size || (isSummary ? 22 : 20);
const PAGE_W = 12240, MARGIN = isSummary ? 1440 : 1080;
const CONTENT_W = PAGE_W - 2 * MARGIN;

const t = (text, o) => new TextRun(Object.assign({ text }, o || {}));
const runsFrom = (arr) => arr.map(r => r.url
  ? new ExternalHyperlink({ link: r.url, children: [t(r.t, { bold: !!r.b, italics: !!r.i, color: LINK, underline: {} })] })
  : t(r.t, { bold: !!r.b, italics: !!r.i, color: r.c }));
const content = (b, fallback) => b.runs ? runsFrom(b.runs)
  : [ ...(b.lead ? [t(b.lead + " ", { bold: true })] : []), t(b.text || fallback || "") ];

const thin = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

function cellParas(v, bold) {
  if (Array.isArray(v)) return [new Paragraph({ spacing: { after: 40 }, children: runsFrom(v) })];
  return String(v || "").split("\n").map(line =>
    new Paragraph({ spacing: { after: 40 }, children: [t(line, { bold: !!bold })] }));
}

function tableBlock(b, width) {
  const cols = (b.header || b.rows[0]).length;
  const pct = b.widths || Array(cols).fill(100 / cols);
  const w = pct.map(p => Math.round(width * p / 100));
  const mk = (cells, head) => new TableRow({ tableHeader: !!head, children: cells.map((c, i) =>
    new TableCell({ width: { size: w[i], type: WidthType.DXA },
      margins: { top: 60, bottom: 60, left: 90, right: 90 },
      shading: head ? { type: ShadingType.CLEAR, color: "auto", fill: "EEF4FA" } : undefined,
      children: cellParas(c, head) })) });
  const rows = [];
  if (b.header) rows.push(mk(b.header, true));
  for (const r of b.rows) rows.push(mk(r, false));
  return [new Table({ width: { size: width, type: WidthType.DXA }, columnWidths: w, borders, rows }),
          new Paragraph({ spacing: { after: 60 }, children: [] })];
}

function blockToParas(b, width) {
  switch (b.type) {
    case "sub":
      return [new Paragraph({ spacing: { before: 100, after: 40 }, children: [t(b.text, { bold: true })] })];
    case "flag":
      return [new Paragraph({ spacing: { after: 70 }, children: [t(b.label + " ", { bold: true, color: FLAGC }), t(b.text)] })];
    case "bullet":
      return [new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 50 }, children: content(b) })];
    case "num":
      return [new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 50 }, children: content(b) })];
    case "confirm":
      return [new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 50 },
        children: [t("[TO CONFIRM: ", { bold: true }), t(b.text), t("]", { bold: true })] })];
    case "quote":
      return [new Paragraph({ spacing: { before: 40, after: 80 }, indent: { left: 200 },
        children: [t("“" + b.text + "”", { italics: true }), ...(b.who ? [t(" - " + b.who, { italics: true })] : [])] })];
    case "callout":
      return [new Paragraph({ spacing: { before: 60, after: 100 }, indent: { left: 120, right: 120 },
        shading: { type: ShadingType.CLEAR, color: "auto", fill: "EEF4FA" },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 6 } },
        children: [...(b.title ? [t(b.title + " ", { bold: true })] : []), ...content(b)] })];
    case "q": {
      const out = [new Paragraph({ spacing: { before: 40, after: 30 }, children: [t("Ask: ", { bold: true, color: ACCENT }), t(b.text, { bold: true })] })];
      if (b.follow) out.push(new Paragraph({ indent: { left: 360 }, spacing: { after: 30 }, children: [t("Follow-ups: ", { bold: true }), t(b.follow)] }));
      if (b.listen) out.push(new Paragraph({ indent: { left: 360 }, spacing: { after: 70 }, children: [t("Listen for: " + b.listen, { italics: true, color: "555555" })] }));
      return out;
    }
    case "table":
      return tableBlock(b, width);
    case "p":
    default:
      return [new Paragraph({ spacing: { after: 80 }, children: content(b) })];
  }
}

const children = [];
if (isSummary) {
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { after: 160 }, children: [t(data.title || "Intake Notes")] }));
  const left = Math.round(CONTENT_W / 2), right = CONTENT_W - left;
  const rows = (data.rows || []).map(r => new TableRow({ cantSplit: false, children: [
    new TableCell({ width: { size: left, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP,
      margins: { top: 100, bottom: 100, left: 110, right: 110 },
      children: [new Paragraph({ spacing: { after: 120 }, children: [t(r.section, { bold: true })] }),
        ...(r.prompts || []).map(p => new Paragraph({ spacing: { after: 100 }, children: [t(p)] }))] }),
    new TableCell({ width: { size: right, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP,
      margins: { top: 100, bottom: 100, left: 110, right: 110 },
      children: (r.blocks || []).flatMap(b => blockToParas(b, right - 220)) }),
  ] }));
  children.push(new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [left, right], borders, rows }));
} else {
  children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(data.title || "Document")] }));
  if (data.subtitle) children.push(new Paragraph({ spacing: { after: 120 }, children: [t(data.subtitle, { italics: true, color: "666666" })] }));
  for (const s of (data.sections || [])) {
    if (s.heading) children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [t(s.heading)] }));
    for (const b of (s.blocks || [])) children.push(...blockToParas(b, CONTENT_W));
  }
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: SIZE }, paragraph: { spacing: { line: 264, lineRule: "auto" } } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: SIZE + 10, bold: true, font: FONT, color: "1A1A1A" },
        paragraph: { spacing: { before: 0, after: 60 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: SIZE + 4, bold: true, font: FONT, color: isSummary ? "1A1A1A" : ACCENT },
        paragraph: { spacing: { before: 220, after: 80 }, outlineLevel: 1 } },
    ],
  },
  numbering: { config: [
    { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] },
    { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 260 } } } }] },
  ] },
  sections: [{ properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } }, children }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(outPath, buf); console.log("wrote " + outPath); });
