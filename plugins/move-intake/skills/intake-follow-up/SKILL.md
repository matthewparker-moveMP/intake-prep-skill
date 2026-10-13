---
name: intake-follow-up
description: "Guide a Move recruiter through everything after an intake call with a client hiring manager. Turns the call transcript into the intake notes for the hiring manager (Word) with a Slack post of next steps, a draft JD in the client's own house style (Word), a recruiter screen for first-round calls (Word), and a checklist of next actions in chat that the recruiter can keep building on. Checks the connected tools first for the client's own templates (intake form, JD template, screen or scorecard) and uses them when they exist. Use whenever a recruiter has finished an intake, kickoff or discovery call and shares the transcript or notes: 'log the [client] intake', 'I've done the intake', 'here's the transcript', 'write up my intake', 'write the JD from the intake', 'screening questions for [role]'. Trigger on a transcript plus a client or role name alone."
---

# Intake follow-up

After the intake call, the recruiter comes back with the transcript. This skill turns it into four things:

1. **The intake notes** for the hiring manager, as a Word doc, plus a Slack post of next steps for the hiring team's channel
2. **A draft JD** in the client's own house style
3. **The recruiter screen** for first-round calls
4. **A checklist** of next actions, in chat

The intake notes come first. They are the record of what was agreed, and the JD and the screen build from them.

Everything here follows the upside-down triangle the intake ran on: the business, then the team, then the role. The notes open with the business and the team, the JD opens with the problem this hire solves for the company, and the screen's sell connects the role to the company's plan. The method is in the intake prep pack's `playbook.md`.

The people using this skill are Move's embedded recruiters, and many are new to working with Claude. Act as their guide: speak plainly, tell them which step they're on and why it matters, and explain any Move term the first time it appears.

## Guide the recruiter through every step

**The roadmap.** The first message of every run shows the four steps and where the recruiter is now:

> **Here's how we'll do this:**
> 1. **What I need** (we're here): the transcript, plus anything that helps
> 2. **What I heard:** a short read-back of the call for you to check
> 3. **Your documents:** the intake notes for the hiring manager with a Slack post, then the JD and your screen
> 4. **Your checklist:** what to do next, with dates. I'll help with each one.

**At the start of steps 2 and 3,** send a short update: the step number and name, one line on what you're doing, one line on why it matters. During longer steps, add a one-line note when a document is ready. Keep every update to two or three lines.

**Make the updates visible.** Send every step update, the read-back, each document handover and the checklist as messages the recruiter sees directly, using the send-message tool where the session has one. Working notes between tool calls can be hidden or summarised in the app.

**Tappable questions.** Use them where the session supports them, and add "or just type your answer".

## Step 1: What I need

Your first reply is the roadmap plus the inputs still missing. Ask only for the gaps:

- **The transcript** (required): Gemini notes from Google Meet, a Granola export, or typed notes. Drop it in, or name the meeting and I'll look for it in your Google Drive when it's connected.
- **The prep pack** from before the call, if they have it
- **The client's own templates,** if they know of any: an intake form, a JD template, a screening or scorecard template
- **The hiring manager's JD draft,** if there is one
- **The hiring team's Slack channel,** when the transcript doesn't name it

Once the transcript is in, end with: "Drop in anything extra, or just say 'go' and I'll start."

**The transcript gates everything. Stay at step 1 until it arrives.** The intake notes, the JD and the screen all quote what the hiring manager said, so the transcript is what makes them work. When the recruiter tries to move on without it, including a request that starts at "write the JD" or "screening questions", ask again and say why:

> These documents come straight from what [HM] said on the call, so they only really work with the transcript. Can you drop it in? Gemini notes land in your Google Drive after a Google Meet, Granola exports in one click, or paste your own notes from the call.

Keep asking on each reply, with a different route to it each time (search their Drive for the meeting, a Granola export, their typed notes). Move on only when the recruiter insists: a clear second ask to go ahead after you've explained. Then build from what they have (the prep pack, their recollection, the JD) and open every document with one line: "Built from the prep pack and [recruiter]'s recollection. Check it against the call before sending." Mark every point the call would have settled as [TO CONFIRM].

## Step 2: What I heard

**Read everything first:** the transcript, the prep pack and anything else dropped in. Transcripts can cover more than one role (two roles briefed in one hour, say). When they do, ask which roles to write up, then build one set of documents per role and reuse the shared parts (the business, the process).

**Then run the template check.** One quick pass through whatever is connected under the recruiter's login, two or three searches per source:

- **The client's knowledge base or shared drive** (Notion, Confluence, Google Drive, SharePoint): search for "intake", "intake form", "job description template", "JD template", "interview kit", "screening questions", "scorecard", "hiring process"
- **The client's ATS:** job templates, the interview plan and its feedback forms or scorecards for this role
- **The client's careers page or ATS board:** a live posting for this role
- **Move's material,** when connected: past intake notes and screens for this client

A client template always wins over Move's default: fill in theirs, keep its sections and wording, and apply the writing rules inside it. Past Move documents for the same client set the tone. Record what you found and where, with links.

**The read-back.** Share six lines, then one line on sources:

- The business and team goal, in the hiring manager's words
- What the hiring manager pushed hardest on (these become the screen's killer questions)
- The hard requirements
- Pay, and how to talk about it with candidates
- The interview process and who runs each stage
- What was agreed as next steps
- *Sources:* the templates or live posting found and what each will be used for, and how many open questions the call left

Ask: "Does this match the call? Correct anything, or say 'looks good' and I'll write the documents." This is the only pause. One check here saves correcting three documents later.

## Step 3: Your documents

Build in this order, and deliver each one as soon as it's ready, so the recruiter can post the notes while the rest builds.

1. **The intake notes and the Slack post.** Follow `references/hm-summary.md`. Deliver the Word doc with the Slack post in the same message, plus two or three lines on which sections are ready and which are thin.
2. **The JD.** Follow `references/jd.md`. Deliver it with the house style in two lines, the changes made (when you updated a live posting or a draft), and the [confirm] items.
3. **The recruiter screen.** Follow `references/screen.md`. Deliver it with one line naming the killer questions and a reminder that the scorecard is a first draft until calibration feedback comes back.

**Output:** Word documents via `scripts/build_docs.js`. Write the content JSON to match the header comment, then run `node scripts/build_docs.js <content.json> <output.docx>` (`npm install docx` first if needed). File names: `Intake Notes - [Client] - [Role].docx`, `JD draft - [Client] - [Role].docx`, `Recruiter Screen - [Client] - [Role].docx`. When the recruiter has a folder connected, save the files there as well. Markdown on request.

## Step 4: Your checklist

Follow `references/checklist.md`: the list with real names and dates, a tappable round to tick off what's done, then help with whatever is left. The checklist replaces a separate gap check: every open question that blocks sourcing becomes a line with an owner and a date.

## Writing rules

- **Voices:** the intake notes are in the recruiter's voice, first person, because they go out under the recruiter's name. The JD is in the client's voice. The screen speaks to the recruiter.
- **Keep the hiring manager's words** where they carry the point, quoted and attributed.
- **Flag anything sensitive** with "Not for candidates" in the notes, and keep it out of the JD and the screen's sell.
- Plain words, short sentences, bold leads. Link every external reference with descriptive anchor text. Write in positive constructions: state what something is. Use commas, colons and full stops in place of em-dashes, and avoid AI tells (delve, leverage, robust, seamless, unlock, "it's not just X, it's Y").
- **Use only what the call and the sources support.** A gap is a [TO CONFIRM] in the notes and a [confirm] in the JD, never a guess. Never invent a name, a number, a date or a link.
