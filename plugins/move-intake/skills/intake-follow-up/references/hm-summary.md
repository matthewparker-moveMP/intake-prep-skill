# The HM summary and the Slack post

The HM summary is the first thing the hiring manager reads after the intake. It shows what they were asked, what the recruiter heard, and what is still open, so the hiring manager can correct anything in seconds. It also becomes the source for the JD and the recruiter screen, so write it first.

## Which format

- **The client has its own intake form** (the recruiter drops it in, or it sits in the client's knowledge base or ATS): fill in theirs, keeping its sections and wording. Apply the writing rules below inside it.
- **Everyone else:** use Move's default below. It follows the upside-down triangle, with the business first, the open questions collected at the end, and the leadership sections kept for people-leader roles.

## Layout

A title, then one two-column table. Build it with `scripts/build_docs.js` using `"layout": "summary"`.

- **Title:** `Intake Notes - [Client] - [Role]`
- **Left column:** the section name in bold, then the prompts for that section, word for word as below.
- **Right column:** the recruiter's read, as short bullets under bold sub-headings.

## The sections (Move default)

**1. The business and the team**
Prompts: "What is the business trying to achieve this year?" · "What does your team do, what problems do you solve, and how does your work fit into the wider business?" · "(Imagine you're explaining your team to someone who knows nothing about this area.)"
Sub-headings: The business this year · Where the team sits · What the team does · How it fits the wider business

**2. Role context and business impact**
Prompts: "What business problem does this hire solve today?" · "What is the complexity of the problem space(s) this hire will handle?" · "What does success look like at 6 and 12 months?" · "What happens if the seat is still open in 3 to 6 months?" · "How does this role move team or company goals?"
Sub-headings: The problem this hire solves · Complexity of the problem space · Success at 6 and 12 months · Cost of an open seat · Impact on goals

**3. Ideal candidate profile**
Prompts: "What are the must-have knowledge areas and skills, and the nice-to-haves?" · "Which backgrounds tend to succeed or struggle in this team?" · "What adjacent profiles could we consider?" · "What are the top 3 attributes that set a great hire apart?" · "How did you react to the calibration profiles?"
Sub-headings: Must-haves · Nice-to-haves · Backgrounds that work, and backgrounds that struggle · Adjacent profiles · Top 3 differentiators · Calibration reactions (one line per profile: yes, no or maybe, and why, in their words)

**4. Leadership impact and scope** (people-leader roles only; leave the row out for individual contributors)
Prompts: "What change is this leader expected to drive?" · "What legacy or gaps are they stepping into?" · "What are the biggest risks in this hire?"

**5. Leadership profile** (people-leader roles only)
Prompts: "What leadership style will succeed?" · "What size and scale of teams should they have led?" · "What stakeholder complexity will they manage?" · "What kind of leader struggles here?" · "How should they influence senior stakeholders?"

**6. Talent market and positioning**
Prompts: "Where does this talent sit today?" · "Why would a top candidate leave their current role for this one?" · "What are our advantages (projects, tech, growth, impact)?" · "What flexibility exists (scope, title, pay, equity)?" · **Role challenges:** "What might make candidates hesitate?" · "What are the hardest parts of the job?" · "What constraints exist?" · "What have past candidates said when they declined?" · "How do we position these honestly and compellingly?"
Sub-headings: Where this talent sits · Why a strong candidate would move · Flexibility · Challenges and less attractive aspects · How I will position it

**7. Interview and selection strategy**
Prompts: "What is the process, stage by stage, and who runs each stage?" · "What are we truly assessing at each stage?" · "What are the non-negotiables, and what is flexible?" · "Who are the decision-makers, and who are the influencers?" · "What would cause a no even when the candidate is strong?"
Sub-headings: Process as understood today · What each stage assesses (the recruiter screen first: this feeds the screen directly) · Non-negotiables and flexible · Decision-makers and influencers · What causes a no even when strong

**8. Diversity and talent expansion**
Prompts: "Are there overlooked backgrounds or geographies to target?" · "What constraints could we flex to widen representation?"
When the call skipped it, the sub-heading is "Not covered on the call" and the bullets are [TO CONFIRM] items.

**9. Agreed on the call, and reminders**
Prompts: "Brief your hiring team on the requirements and expectations, and prioritise interviewing where possible" · "Keep your calendar up to date so interviews book quickly" · "Hold 3 to 5 interview slots from two weeks out, so strong candidates move straight to a first interview" · "Give feedback within 48 hours of each interview (or the SLA the client already runs)"
Sub-headings: Agreed on the call (each item with an owner and a date) · Standing reminders

**10. Logistics**
Prompts: "Are we set on a location, or open?" · "What level is the role, against the internal bands?" · "Is there a set budget?" · "How do we talk about pay with candidates?"
Sub-headings: Location · Level and band · Budget · How we talk about pay (the exact wording agreed for outreach and for the screen)

**11. Open questions**
Prompts: "What we still need to confirm, who owns it, and by when."
Sub-headings: Needed before sourcing · Can follow
One bullet per question: the question, then "Owner: [name], by [date]". Every [TO CONFIRM] in the rows above appears here once. Order "Needed before sourcing" by how much each answer changes the search (pay and location first).

## Writing the right column

- **The recruiter's voice, first person.** The doc goes out under their name: "I will screen on backend depth rather than keyword matching."
- **Short bullets under bold sub-headings.** One fact or decision per bullet.
- **Quote the hiring manager** where their words carry the point, in italics with attribution: *"We want the opposite of our last hire." - Sam Okafor*. Two or three quotes per section at most; they carry into outreach and the screen.
- **Mark every gap where it sits:** `[TO CONFIRM: the question, and why it matters]`, for example "[TO CONFIRM: what happens to the roadmap if this seat is still open in 3 to 6 months? The req has been open since July.]"
- **Flag sensitive context** with a line starting "Not for candidates:" (a succession, a disliked brand, internal restructuring, anything the HM asked to keep private). Flagged content stays out of the JD and the screen's sell.
- **Record the recruiter's plan** where the call set one: where sourcing starts, which markets come first, how the pool will widen.
- **Use only what the call and the prep pack support.** A gap is a [TO CONFIRM], never a guess.

## The gap check

Score the notes against `intake-checklist.md`, the same list the prep pack planned the call from. Mark each item answered or open; every open item is a [TO CONFIRM] in the notes. A section full of [TO CONFIRM]s is thin. In chat, after delivering the doc, tell the recruiter in two or three lines which sections are ready and which are thin, and name the open questions that block sourcing. Those become lines on the checklist.

## The Slack post

Goes in the hiring team's channel with the Word doc attached. Short enough to read in the channel without opening the doc.

```
*Intake notes: [Role]*
Thanks for the time today, [HM first name]. The full notes are attached. In short: [the focus of the search in one sentence, e.g. "we're going after payments engineers from other fintechs, weighted to mainland Europe"].

*Next steps*
• [Owner]: [action] by [day and date]
• [Owner]: [action] by [day and date]

*What I need from you*
• [question or action] by [day and date]
• Hold 3 to 5 interview slots from [date two weeks out]
```

Three to five next steps and two to four asks. Use the names and dates from the transcript; where a date was left open, propose one and mark it "(proposed)". Draft it in chat for the recruiter to copy. When the client's Slack is connected and the recruiter asks, post it for them; the recruiter always sees the final text first.
