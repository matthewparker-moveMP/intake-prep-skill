---
name: friday-hm-update
description: Writes a Move recruiter's Friday end of week update for one role, posted to the hiring manager in that role's hiring channel. Use when a recruiter says "Friday update for [role]", "end of week update", "EOW update", "weekly update for [hiring manager]", "write up my week on [role]", or dictates or pastes notes about a role's week with stage counts. Run once per role. For the roll-up across all roles to the Head of Talent, use friday-hot-update.
---

# Friday hiring manager update

Write one end of week update for one role, in Move's fixed format, ready to post in that role's hiring channel. The hiring manager reads it on Friday morning and knows where the search stands and what they need to do.

Recruiters usually dictate their notes. Expect loose, spoken input and do the structuring.

## Step 1: Take in the notes

Read what the recruiter has given you: dictated or typed notes, a Loom transcript, an ATS screenshot or paste. Pull out:

- Role title and client
- Candidate count at every stage, and names from HM review onwards
- Recruiter screens completed this week, and how many progressed to HM review
- Outbound candidates contacted this week
- What the market is telling them: candidate reactions, pay, repeated objections
- Focus for next week
- What they need from the hiring manager, with profile links for any review
- A Loom link, if they recorded one

Where a candidate name looks mistranscribed, mark it `[name unclear]` and raise it in Step 2.

## Step 2: Fill the gaps

Stage counts are a gate. They come from the ATS screenshot or from the recruiter directly, every time, because the notes only mention some of the candidates. Where the counts and the notes disagree, trust the counts and point out the difference.

Ask for everything still missing in one round. Use the interactive question tool where it's available, since recruiters often answer on their phone:

- Tick boxes where several answers can apply, such as the asks of the hiring manager.
- A single choice for an either-or, such as a name with one likely spelling.
- A plain written ask for anything to paste or type: stage counts, profile links.

Put your best reading first so the common case takes one tap. Skip questions the notes already answer.

When no market insight is in the notes, ask for one. Every update carries at least one.

## Step 3: Write the update

Use exactly this format. It's Slack formatting, so single asterisks give bold.

```
*[Role]: end of week update, [date]*
🎥 [Loom walkthrough](url) ([n] mins)

*Summary:* [One or two sentences on how the search is going.] I need your help with [X].

*Pipeline:*
• [Furthest stage] ([count]): [Names], [commentary]
• HM interview ([count]): [Names], [commentary]
• HM review ([count]): awaiting your feedback, links below
• Recruiter screen ([count]): [x] booked, [y] waiting to book

*Key moves this week:*
• Screened [x] candidates, [y] progressed to HM review
• [n] candidates contacted on outbound

*What the market is telling us:*
• [Candidate reactions, pay, repeated objections]

*Focus for next week:*
• [Goals with numbers]

*Actions required from you:*
• [Decision, feedback or slot, with links and a date]

Let me know if you have any questions and have a great weekend!
```

Include the Loom line only when there's a link. Use the client's own stage names where the recruiter gives them.

Worked examples are in `references/examples.md`. Read them before writing your first update in a session.

## Rules

- **Summary:** one or two sentences. First how the search is going, then the one thing needed from the hiring manager. Someone who reads only this line knows where things stand.
- **Pipeline:** stages run from the furthest along down to recruiter screen. Every stage shows its count in brackets. Name candidates from HM review onwards, and give counts only at recruiter screen.
- **Commentary:** short and factual. What happened, and what happens next.
- **Actions:** each one names the task, links the profiles and gives a date.
- **Numbers:** use only the numbers the recruiter gives you.
- **Feedback:** report that feedback exists. Leave out any characterisation the notes don't carry.
- **Privacy:** keep personal reasons for scheduling changes out of the written update. The reschedule stays, the reason goes.
- **Voice:** plain UK English, the way a recruiter talks to a hiring manager they work with every day. Write in positive constructions: say what is true and let it stand.
- **Punctuation and words:** use commas, colons or full stops instead of dashes. Use everyday words instead of terms like leverage, robust, seamless, delve or unlock, and skip the "it's not just X, it's Y" reframe.

## Step 4: Hand it over

Give the update in one code block so it copies cleanly. Under it, list anything you flagged, such as unclear names or counts that disagreed with the notes.

When Slack is connected, offer to post it in the role's hiring channel. Post only after the recruiter confirms the channel and the text.

When the recruiter has more roles to report, offer to start the next one. Once all roles are done, point them to friday-hot-update for the Head of Talent roll-up.
