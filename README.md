# intake-prep

A Claude skill that runs a complete intake cycle for a hiring kickoff: prep the call, run it to a structure, and log the outcome as a record sourcing can actually launch from.

One good intake sets up the whole search. One vague intake costs three weeks of misaligned sourcing, a hiring manager who rejects the first eight profiles on an axis nobody wrote down, and a rewrite of the brief. This skill exists to make the first outcome the default.

Built for in-house talent teams. It assumes you own the requisition, sit with the hiring manager, and have to live with whatever the intake failed to pin down.

## What it does

Three moments. Each runs on its own — you can prep today and log next week.

**PREP** — before the call
- Deep research on the company and team, run as its own pass where depth warrants
- 6 to 8 **real, sourced calibration profiles** with live links: close fits, edge cases that each test a specific open question, and one deliberate wrong-shape
- Persona hypotheses framed as react-to-this prompts, plus a nominated persona interviewee
- A question bank per pillar, broad to narrow, with must-hit questions tagged so compression under time pressure is obvious
- Output: a formatted `.docx` prep pack, or markdown on request

**RUN** — during the call
- Open and frame, then four pillars: role brief, candidate profile (the bulk of it), live calibration against the starter set, persona-lite. Then logistics and sign-offs
- Each stage carries a "must leave with" list, and a documented 30-minute compression order for when the call gets cut

**LOG** — after the call
- Intake notes: decisions locked by pillar, answers in the hiring manager's own words, open questions with named owners and dates
- A gap check scored against the coverage checklist, reported plainly ("role brief and calibration are solid; persona is thin")
- A persona-interview recommendation, made conditional on evidence rather than by default

## The idea behind it

Three design choices do most of the work:

**Calibration with real people, not archetypes.** A hiring manager reacting to a real profile with a real link tells you more in ninety seconds than twenty minutes of abstract requirements talk. Sketches produce polite agreement; real people produce decisions.

**Questions designed backwards from a coverage checklist.** [`references/coverage-checklist.md`](references/coverage-checklist.md) defines what a complete intake captures. The question set exists to fill it, and the post-call gap check scores against the same list. Same standard at both ends.

**Every fact cited, every inference labelled.** Hypotheses are marked as things to test on the call. A named gap beats a confident guess, and an invented candidate name is treated as a failure rather than a rounding error.

## Install

**Claude Code** — clone into your skills directory:

```bash
git clone https://github.com/matthewparker-moveMP/intake-prep-skill.git ~/.claude/skills/intake-prep
```

**Claude apps** — upload `intake-prep.skill` (a packaged bundle of this repo) as a skill.

For the `.docx` output, install the one dependency:

```bash
cd scripts && npm install
```

Everything else runs with nothing installed and nothing connected.

## Use

Trigger any one moment in plain language:

```
prep pack for Senior Backend Engineer at Northwind Robotics
I've got an intake meeting Thursday — here's the JD
find calibration profiles for this role
log the Northwind intake        (with a transcript attached)
```

## Connected tools

The skill works with nothing connected and adapts to what it finds, saying once what a missing tool would have added rather than quietly degrading. Ranked by impact:

| Tool | What it adds |
|---|---|
| Browser with a logged-in LinkedIn session | Real calibration profiles and team mapping. The single biggest upgrade |
| Email and calendar | Meeting length and who's in the room, which sets question priority |
| Internal docs (Notion, Drive) | Prior briefs, past intakes, known DNC lists |
| Transcript source | Makes LOG one step; a dropped-in PDF works fine otherwise |
| People-data tools (Apollo, Clay, ZoomInfo) | Discovery at scale. A supplement, never a requirement |

Ask it to "set up intake-prep" for a walk-through. Full detail in [`references/setup.md`](references/setup.md).

## Layout

| Path | What it holds |
|---|---|
| [SKILL.md](SKILL.md) | Entry point: triggers, capability check, the three moments |
| [references/playbook.md](references/playbook.md) | Call structure, candidate-profile pillars, push-back triggers |
| [references/coverage-checklist.md](references/coverage-checklist.md) | Definition of a complete intake |
| [references/calibration-sourcing.md](references/calibration-sourcing.md) | Full calibration sourcing method |
| [references/people-search.md](references/people-search.md) | People search and verification mechanics |
| [references/company-research.md](references/company-research.md) | External research method |
| [references/setup.md](references/setup.md) | What to connect and why |
| [scripts/build_prep_pack.js](scripts/build_prep_pack.js) | Builds the `.docx` prep pack from a content JSON |
| [examples/example-content.json](examples/example-content.json) | Worked example covering every block type |

Build the example to see the output shape:

```bash
cd examples && node ../scripts/build_prep_pack.js example-content.json example.docx
```

## Sourcing conduct

The calibration and people-search steps read public profiles to build a set for internal discussion. The skill is written to verify every profile before it ships, exclude off-limits companies and do-not-contact lists from the start, and refuse to invent a name or a link. Candidates are not contacted at this stage — an intake produces a hypothesis about who to approach, and the approach is a separate decision you make with the facts in hand.

## Contributing

Issues and pull requests are welcome, particularly on the reference docs: the coverage checklist and the calibration method are opinionated, and better opinions are worth having. Changes to a reference doc should say which call outcome they improve.

## License

[MIT](LICENSE) © Matthew Parker
