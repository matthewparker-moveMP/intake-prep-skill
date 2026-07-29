---
name: intake-prep
description: "Run a high-quality intake cycle for a recruiting kickoff: prep the call, structure the call, and log the outcome. Use whenever the user is preparing for an intake, kickoff, or discovery call ('prep pack for [role] at [company]', 'I've got an intake meeting', pastes a JD ahead of a client call), asks to find calibration profiles for a role, or says 'log the [client] intake' with a transcript after the call. Three moments: PREP (research, calibration starter profiles via live sourcing, persona hypotheses, question set), RUN (the call structure), LOG (intake notes document, gap check with a persona-interview recommendation). Trigger on any one moment alone — a JD and a meeting time means PREP; a transcript and a client name means LOG."
---

# Intake Prep

One elite intake conversation sets up the whole search: requirements, calibration, outreach language, logistics, all captured well enough that sourcing launches in days. This skill's contract is: **walk into the call over-prepared, run it to a structure, and walk out with a complete, well-organised record**. The coverage checklist defines what "complete" means.

The skill runs in three moments. Each can run alone.

Read `references/playbook.md` before assembling any pack (call structure, candidate-profile pillars, push-back triggers). Read `references/coverage-checklist.md` to know what the call must capture — the question set is designed backwards from it. Read `references/company-research.md` before the deep external research run. Read `references/people-search.md` before sourcing people. Read `references/calibration-sourcing.md` — the full method and reasoning — before any calibration sourcing run, and follow it end to end.

## Capability check (start of every PREP)

Recruiters run this skill with different tools connected: some have email and calendar, some have a browser with a logged-in LinkedIn session, some have client systems, some have none of these. Before researching, take stock of what is actually available in this session and adapt:

- **Available** → use it, in the research order below.
- **Missing** → say so once, name what it would have added ("no calendar access, so confirm the meeting length and attendees for me"), ask the user for the one or two facts that matter, and carry on. A shorter pack built on verified inputs beats a padded one built on guesses.

Where a high-impact tool is missing, add the one-line connect pitch from `references/setup.md` — once per session, never stalling the prep. When the user asks to "set up intake-prep" or what they should connect, run the full walk-through in `references/setup.md`.

Never fake a capability. Where no sourcing route exists at all, the calibration set becomes clearly-labelled archetypes (see `references/calibration-sourcing.md`), offered with "connect a browser with LinkedIn and I can run this live."

## Moment 1 — PREP (before the call)

**Inputs to confirm:** the role (JD, link, or title), the client, and ideally meeting time and attendees. Carry the original job link into everything. Ask only for what's genuinely missing, in one short message.

**Research order matters** — internal context routinely overturns assumptions:

1. **Internal documentation** (whatever the recruiter can reach: client docs, prior briefs, past intakes, account notes): whether this is a repeat client, prior roles, what is already known. Internal beats web.
2. **Email and calendar** (where connected): the client thread, the meeting slot, who is in the room. A 30-minute slot changes the question priority.
3. **Deep external research** — a dedicated research pass on the company, its people, funding, growth, and competitors, run as its own agent where depth warrants. Follow `references/company-research.md` end to end. Returns a company research brief that feeds the role-decoded flags, why the role exists now, the talent reality, and the company proof points outreach will draw on.
4. **Group-aware people search** inside the client: resolve the corporate structure, map the team, nominate persona-interview targets. See `references/people-search.md`.
5. **Calibration sourcing run**: find 6–8 real candidate profiles for the calibration walk-through — close fits, edge cases that each test a live question, one deliberate wrong-shape. Follow `references/calibration-sourcing.md` end to end (mechanics in `references/people-search.md`). Real profiles with real links only; a flagged gap beats an invented name.
6. **Decode the role**: what it really is beneath the title; JD-vs-reality mismatches to resolve live. Where the JD leans on an umbrella term (digital, growth, full-stack, AI-powered), decompose it into its component disciplines to test on the call.

**Then produce the prep pack** — assembled in this order, anchors above the questions:

1. The meeting and the spec (when, who, how long, the job link)
2. What we already know (repeat-client context)
3. The role, decoded (with headline flags)
4. The three anchors (the decisions the search hangs on — see playbook)
5. Why the role exists (business problem, to confirm in the HM's words)
6. The question set — a **bank per pillar, organised broad to narrow**: an opener that invites the HM to describe the topic in their own words, then narrowing follow-ups, then the gate-test. Produce more questions than the time allows; this is a menu to pick from by the flow of the conversation, not a script to read in order. Tag the two or three **must-hit** questions per pillar so compression is obvious under time pressure. Structure by the four pillars (role brief, candidate profile, calibration, persona) plus logistics, each question with a "listen for" note. Coverage floor: everything in `references/coverage-checklist.md` either pre-filled from research or carried as a question.
7. Talent reality (target companies, comp, geography)
8. Key players and next steps
9. **Calibration starter set** — the 6–8 sourced profiles, each with link, one-line rationale, tier hypothesis, and the question it tests on the call
10. Persona hypotheses — motivators, frustrations, language of the craft, framed as react-to-this prompts, plus the nominated persona interviewee

Default output: a polished Word document via `scripts/build_prep_pack.js` (write the content JSON matching the script's header comment, run `node scripts/build_prep_pack.js <content.json> <output.docx>`, `npm install docx` first if needed). Title the document "Sourcing Plan: [Company] - [Role Title]" and save it with a matching filename ("Sourcing Plan - [Company] - [Role Title].docx", colon dropped for filesystem safety). Markdown on request.

## Moment 2 — RUN (the call)

The call structure lives in `references/playbook.md`: open and frame, then the four pillars — role brief, the candidate profile (the bulk), live calibration against the starter set, persona-lite — then logistics and sign-offs. Each stage carries a "must leave with" list; when time compresses, anchors and hard gates survive first. The user runs the call; the prep pack is built so the structure is on one page in front of them.

## Moment 3 — LOG (after the call)

Trigger: "log the [client] intake", a transcript file, or both. Transcripts are usually meeting-notes PDFs (Gemini Notes, Granola, Fireflies exports) in Downloads or attached to the chat.

1. **Write the intake notes** as a document: decisions locked (by pillar), answers in the client's words, open questions with named owners and dates, quotes worth keeping in the HM's words, and the logistics locked on the call (comp band and its phrasing rules, booking links, sign-off owners, ways of working). Save as "Intake Notes - [Company] - [Role Title].docx" (or markdown on request) alongside the prep pack.
2. **Run the gap check**: score coverage against `references/coverage-checklist.md`, section by section. Report plainly: "role brief and calibration are solid; persona is thin." Where persona is thin, recommend the 20-minute persona interview with the person nominated in prep, and list exactly what it still needs to cover. The separate persona interview is conditional, decided by evidence.
3. **Name what's next**: calibration scoring owner and deadline, triage questions to sign off, persona interview if called for, target launch window. The recruiter files the documents wherever their account works; if they ask to log into a client system or workspace that is connected, follow their instruction for where and how.

## Writing rules

Cite facts; mark inferences as hypotheses to test on the call. Write in positive constructions (state what something is). Keep prose sharp, scannable, bullet-led with bold leads. Avoid em-dashes and AI tells in client-facing output. Name gaps where a source or connector is missing rather than guessing.

**Every external URL is a live hyperlink, in every output.** LinkedIn profile URLs above all — a calibration profile whose link the recruiter has to copy-paste is a broken instrument on the call. The docx builder auto-links URLs and bare linkedin.com links (use the `link` run property for labelled links); in markdown and chat, use `[Name — Title](url)`. Full JD links, company pages, funding announcements, and booking links follow the same rule. A URL rendered as dead text fails the pack.
