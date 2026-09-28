# The JD, in the client's house style

The JD goes to the hiring manager for sign-off, then onto the client's careers page. It should read as if the client's own team wrote it, and carry what the intake agreed.

## 1. Find the starting point

Check in this order and use the first that exists:

1. **A live posting for this role** on the client's careers page or ATS board (Lever, Ashby, Greenhouse, Workable, Personio, Teamtailor). Update it against the intake.
2. **The hiring manager's own draft** (the recruiter drops it in, or it is in the prep pack's sources). Edit it against the intake.
3. **Nothing yet.** Write the draft from the intake.

In cases 1 and 2, keep the client's words wherever the intake left them standing, and change only what the intake changed. The writing rules apply to the lines you add or rewrite; the client's own published copy stays as it is. Where the intake contradicts the posting or the draft (a softer or harder bar than the one published), keep the published line, add a [confirm], and name the clash in the handover.

## 2. Read the house style

**When the template check found a client JD template,** use it: its sections, headings and reused blocks are the house style. Skim one live JD to confirm the voice, then move to section 3.

Otherwise, read three live JDs from the client's careers page or ATS board, closest function and level first, skipping the role itself. When nothing is reachable, ask the recruiter for one or two past JDs; when there are none at all, use the default structure in section 4 and say so in the handover.

Note, in a few lines for the handover:

- **Section order and headings,** in the client's exact wording ("What you'll do", "About you", "What we offer")
- **Length:** a rough word count
- **Voice:** we and you, formal or casual, bullets or prose, how bullets start
- **Blocks reused word for word:** the company intro, benefits, equal opportunity statement, how we hire. Copy these exactly from the most recent JD.
- **How pay and location appear:** a band, a table by country, or no pay at all; how remote and office days are worded

Read it fresh on every run. Three page reads keep it current with what the client publishes.

## 3. Write the draft

Draw everything from the HM summary:

- **Title:** the external title agreed on the call
- **The opening:** the problem this hire solves and why it matters now, in candidate-safe terms
- **What you'll do:** outcomes over activities, drawn from success at 6 and 12 months and the day-to-day
- **What you bring:** the must-haves as agreed, in the hiring manager's words where they are safe to publish; nice-to-haves marked as such
- **Location, pay and process** in the client's usual wording, using the pay wording agreed for candidates
- **The reused blocks,** copied word for word

Rules:

- Everything flagged "Not for candidates" in the summary stays out.
- Internal labels (level codes, requisition numbers, band names) stay out unless the client publishes them.
- Mark anything the intake left open as `[confirm: what, and who decides]`, for example "[confirm: base range for Spain, the Head of Talent]".
- Match the client's length. A JD twice as long as theirs reads as someone else's.
- The writing rules in SKILL.md apply inside the client's voice: positive constructions, plain words, no em-dashes, none of the AI tells.

## 4. Default structure (when there is no house style to copy)

About [client] (two or three sentences) · The role (the problem and why now) · What you'll do (five to seven outcome bullets) · What you bring (five to seven bullets, must-haves first) · Nice to have (two or three) · Where and how you'll work · The process · What we offer

## 5. Output

A Word document, `JD draft - [Client] - [Role]`, built with `scripts/build_docs.js` (`"layout": "doc"`, the client's headings as sections, `"font": "Arial", "size": 22`). In cases 1 and 2, open it with a short callout titled "For sign-off (remove before publishing)" that lists the changes in one or two sentences, so the hiring manager reviews only what moved. In the handover message, give the recruiter:

- The house style in two lines, and which JDs it came from, with links
- In cases 1 and 2, the changes made against the live posting or the draft, as a short list
- The [confirm] items, and who decides each
