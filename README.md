# Move Intake

Move's intake skills for embedded recruiters. Two skills: one to prepare for an
intake call and run it, and one for everything after it.

Every intake follows the upside-down triangle: start with the business, narrow
to the team, finish with the role. The pack gives you a broad view of the
company and the team, then a short set of sharp role questions.

## What you get

`/move-intake:intake-prep-pack` covers before and during the call.
`/move-intake:intake-follow-up` covers everything after it.

The prep pack works as a guide, in five steps it shows you up front: setup, the business
and the team (it checks its read with you before moving on), the role, your prep
pack with a walkthrough of how to run the call, and finally calibration profiles
from LinkedIn. The pack arrives first so you can start reading while the
LinkedIn search, the longest step, runs.

**Before the call.** It starts by getting you set up: what you'll get, the few
details it needs (client, role, the JD if you have one, meeting time), a check of
what's connected, and help getting a browser signed in to LinkedIn. Then it
researches the client, starting with what you can reach inside the client (their
knowledge base, shared drive, Slack, ATS, careers page) and anything you drop
into the chat, then deep research on the company to fill the gaps. It maps who's
in the team today, reads the client's hiring bar, and finds 3 to 4 real
calibration profiles. You get a Word prep pack (the business, the team, the role,
then the close with a draft candidate pitch) and a second file with the profiles. A role title and a client name are
enough to start.

**On the call.** Business and team first, then the role brief, the ideal
candidate and the calibration profiles, then the close: pay and how to talk about
it with candidates, location and process, the pitch read back to the hiring
manager, and next steps with dates. Timings and shorter-call rules are built in.

**After the call** (`intake-follow-up`). Share the transcript and say "log the
[client] intake". It checks what you have connected for the client's own
templates (intake form, JD template, screening or scorecard templates), reads the
call back to you in six lines to check, then builds three Word documents:

- **Intake notes** for the hiring manager, in Move's intake notes format (the
  question on the left, what you heard on the right, open questions collected at
  the end with owners and dates), plus a Slack post of next steps for the hiring
  team's channel
- **A draft JD** in the client's own house style, read from their live JDs, or an
  update to the live posting or the hiring manager's draft
- **Your recruiter screen** for 30-minute first calls: the basics every time,
  the role's hard requirements, three or four killer questions, the sell and a
  scorecard

Then a checklist of next steps in chat, with dates, which it helps you work
through: posting the notes, sign-offs, the persona interview, your sourcing
goal of 20 candidates in five working days, diary time for sourcing and the
Friday update, and interview slots held in the hiring manager's diary.

The persona interview runs on every role, separately from the intake, with a
strong performer in the team.

## How to start it

- "prep pack for [role] at [company]", or paste a JD or a role title with a meeting time
- "I've got an intake meeting Thursday with [client]"
- "find calibration profiles for [role]"
- "log the [client] intake", "I've done the intake" or "here's the transcript"
- "write the JD from the intake" or "screening questions for [role]"

## What to connect

Connect these under your own login. The setup step checks what you have and
walks you through the rest.

| Tool | Used for |
| --- | --- |
| The client's knowledge base, shared drive, Slack and ATS | Company goals, team context, org charts, past specs and hires, and the client's own templates for intake notes, JDs and screens |
| A browser signed in to LinkedIn: the app's built-in browser (nothing to install) or Claude in Chrome | Team mapping and calibration profiles. You can skip it; the pack then runs without calibration profiles |
| Gmail and Google Calendar | The client thread, the meeting time and attendees, and booking diary time after the call |

You can also drop files straight into the chat: the JD, org charts, decks, and
the context pack Move shared with you.

## The Word output

The prep pack builds through `intake-prep-pack/scripts/build_prep_pack.js`, and
the follow-up documents through `intake-follow-up/scripts/build_docs.js`. Both need
the `docx` package, which Claude installs on the first run. Ask for markdown instead if you'd rather work in chat.

## Reference files

The skills read these as they go.

`intake-prep-pack`:

- `setup.md`: the start-of-run onboarding, connection steps and handover wording
- `playbook.md`: the triangle, question bank, call timings, push-back triggers
- `intake-checklist.md`: what to leave the call with
- `people-search.md`: team mapping and sourcing mechanics
- `calibration-sourcing.md`: the calibration method

`intake-follow-up`:

- `hm-summary.md`: the intake notes format and the Slack post
- `jd.md`: finding the starting point, reading the house style, writing the draft
- `screen.md`: the recruiter screen template and its quality bar
- `checklist.md`: the next-steps checklist and how to run it in chat
- `intake-checklist.md`: the same list the prep pack uses, for the gap check

## Install

**Claude app:** go to **Customize → Plugins**, click **Add → Add marketplace**, paste `matthewparker-moveMP/intake-prep-skill`, then install **move-intake**.

**Claude Code:** paste this repo's link into a session and ask Claude to install it, or run:

```bash
claude plugin marketplace add matthewparker-moveMP/intake-prep-skill
```

```bash
claude plugin install move-intake@move-intake
```

**For a whole team:** an admin adds the marketplace once, then sets the plugin to **Installed by default** under **Organization settings → Plugins & skills**, so everyone has it from their next session.

## License

[MIT](LICENSE) © Matthew Parker
