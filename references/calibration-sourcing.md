# Calibration sourcing — the full method

How to build a calibration starter set from a job description alone. This file carries the reasoning, not just the steps — follow the thinking, and the steps come out right. Field-tested on an anti-fraud analyst role (July 2026); the worked example at the end is that run, anonymised.

## The mental model — read this twice

A calibration starter set is an **instrument, not a longlist**. Its output is *decisions on the call*: which boundaries are hard, which adjacencies transfer, what the client's yes and no actually look like. Every profile earns its slot by the question it forces the client to answer. A set of eight generic close-fits extracts one decision; a designed set extracts six or seven.

This reframes quality: a profile the client rejects can be the most valuable one in the set, *if the rejection forces the boundary into words*. You are choosing questions wearing the shape of people.

At this moment you hold only the JD. You cannot know the ICP — the set exists to discover it. So hold every tier label as a hypothesis, and design for coverage of the open questions rather than confidence in your guesses.

## Step 1 — Read the JD twice, for two different things

**Pass 1: the anatomy.** Extract: the core verb of the job (what does this person *do* all day — on the anti-fraud search it was "find anomalies and define detection rules", which meant "rule writer" in a headline was gold); the hard skills as stated; the domain; the geography and work model; the seniority as stated; the team context.

**Pass 2: the ambiguities.** List the questions the JD leaves open. These become your edge-case slots, so write them down explicitly before searching. The recurring ones:

- **Title vs work** — the JD says Analyst; would a Data Scientist doing this exact work qualify? (Or the reverse.)
- **Domain transfer** — the JD names a domain (ad fraud); do neighbouring domains (payments fraud, trust & safety, insurance fraud) transfer, or is the domain itself the gate?
- **Skill without domain** — would someone with the methods (stats, experimentation, SQL/Python) but no domain history clear the bar?
- **Seniority as proxy** — "Senior" plus "2+ years" means the title and the bar disagree; what is seniority actually measuring?
- **Industry vs function** — is being in the right industry (gaming/adtech) worth anything if the function is wrong?

Three to five open questions is normal. If you found one, read again.

## Step 2 — Build the search vocabulary

Translate the JD into **the language candidates use about themselves**, which is skills language, not job-ad language:

- From the core verb: "anomaly detection", "fraud detection", "behavioural analytics" — the craft nouns.
- From the hard skills: SQL, Python, A/B, dbt — as literal keywords.
- From adjacent titles people actually hold: Fraud Analyst, Anti-Fraud Analyst, Trust & Safety Analyst, Risk Analyst — one query family per title.
- From the competitive space: name the client's market neighbours (for discovery via Recruiter or a connector; in standard LinkedIn search company-OR queries pull marketing/HR noise — learned the hard way).

**Ordering rule: skills language first, titles second, companies last.** Someone who writes "anomaly detection" in their headline is telling you what they think their craft is. That self-description is stronger signal than any title or employer.

## Step 3 — Search with quality gates

Mechanics (URL patterns, geo filters, URL harvesting) live in `people-search.md`. The reasoning layer:

- Run **4–6 query variants**; each surfaces a different slice, and page-1 ordering shifts between runs, so capture candidates when you see them.
- **Diagnose noise, don't push through it.** A page of marketing managers and consultants means the query family is wrong (usually company-OR in standard search) — switch family instead of paging deeper.
- **Log the misses.** Zero in-city results is a finding, not a failure — it pre-answers the geo-cascade question and belongs in the prep pack.
- Stop when you have roughly **2× the slots** in raw candidates. More search past that point adds noise, not signal.

## Step 4 — Cast the set (the judgment step)

Slots, for a set of 7–8:

**3 close fits.** Your best guess at the bullseye. Selection test: *if the client says no to these, your whole hypothesis is wrong* — and that is a legitimate, valuable outcome; it means the intake just saved three weeks of mis-aimed sourcing. Pick close fits that are each slightly different flavours of the hypothesis rather than three copies.

**3 edge cases, each mapped 1:1 to an open question from Step 1.** This mapping is the heart of the method. Write the question next to the profile: "Daniel — tests whether DS identity is acceptable when the work is fraud." A profile that tests two boundaries at once (Daniel was DS *and* banking) is efficient, but name both tests so the call resolves both. **An edge case is a profile that makes the client hesitate for a describable reason.** "Slightly less experienced" is a weak edge case; "right methods, zero domain" is a strong one.

**1–2 deliberate wrong-shapes.** Near-miss on paper, wrong on what you suspect is the decisive axis. The best wrong-shape shares surface vocabulary with the JD ("fraud" appearing as compliance; the client's exact industry wrapped around the wrong function). When the client says no, ask them to say *why* out loud — the anti-profile writes itself from their answer. A random bad profile teaches nothing; a *near-miss* teaches the boundary.

**Casting rules:**
- Prefer the profile that forces a *sharper* question over the one that looks more impressive.
- Two candidates testing the same question: keep one, bench the other.
- Drop thin profiles ruthlessly — under ~50 connections, no company shown, or an unverifiable headline makes a weak instrument (dropped one for exactly this in the test run).
- Consultants and founders rarely belong: even when domain-perfect, the client reads shape before domain and the reaction muddies. Bench them.
- A set of 6 strong instruments beats 8 with padding. Every profile must earn its slot; padding dilutes the call time each real instrument gets.
- Exclusions apply from the start: the client group's own employees, any off-limits companies, any known DNC list.

## Step 5 — Verify, without exception

**This is the step under the most pressure to skip. Do it anyway.** Open every profile that goes in the set. Record: current role and company as the profile states them now, location, and the one or two signals that argue the slot. Search cards go stale and headlines get truncated; the set goes in front of a client with your name on it.

- Verification fails or the profile is thin → bench the profile, promote an alternate.
- A results page moved on before you captured a URL → recover it with a name search (`?keywords=<name> <distinctive keyword>`).
- Snippet-only entries, if you must carry one, are labelled as such — never presented as verified.
- **Absolute rule: real people, real URLs, zero invention.** One fabricated or misdescribed profile in a client call costs more than an empty slot. A flagged gap ("no strong in-city candidates surfaced — here's what that tells us") is a professional finding; a fake name is a fireable offence.

## Step 6 — Capture incidental signal while you browse

The browsing pass surfaces intel the searches never asked for. Harvest it:

- **Open to work** flags → outreach-priority intel; note it on the profile.
- **Mutual connections** with people on your team → warm-path intel.
- **Structural echoes** — in one test run, a candidate's employer turned out to share the client's majority backer. That detail became a talking point on the call. You find these by asking of every profile: *what does this person's employer have to do with the client?*
- **Market texture** — which titles dominate, which cities, which industries keep appearing. Two lines of this in the prep pack ("this talent lives in one hub's fintech scene, barely in the other's") frames the geo and comp conversation before it starts.

## Step 7 — Self-check before shipping

Run this list; fix what fails:

1. Every profile: real URL, opened and verified (or explicitly labelled otherwise)?
2. Every edge case: a named test question written next to it?
3. The close fits: would a "no" on them genuinely falsify the hypothesis?
4. The wrong-shape: near-miss on paper, wrong on one describable axis?
5. In-country count stated; geo gaps named as findings?
6. Zero client-group employees, off-limits companies, DNC names?
7. Tier labels phrased as hypotheses to test, never as verdicts?
8. Bench listed (surfaced but held back, with the reason)?
9. Method notes: which queries worked, what the searches could not find?

## Calibrate your confidence — the known failure mode

The blind test's one real miss: profiles from *adjacent regulated domains* (payments, fintech risk) got tiered as close fits, and the client's actual calibration later demoted that whole domain. The lesson generalises: **when a profile's strength depends on a domain-transfer assumption, it is an edge case, no matter how strong the profile.** Tier it as the question it is ("does payments fraud transfer?"), and let the client's answer promote it. Held as an instrument, the same profile is excellent — the error is only in the label.

The set is a hypothesis. The call is the experiment. Ship it labelled that way.

## Worked example — an anti-fraud run, compressed and anonymised

JD: Senior Data Analyst, anti-fraud, one German hub, SQL+Python, anomaly detection, experimentation. Core verb: *find behavioural anomalies, define detection rules*. Open questions extracted before searching: (1) DS title doing fraud work — acceptable? (2) payments/T&S/insurance fraud — transfers? (3) strong stats, no fraud — clears? (4) right industry, wrong function — worth anything?

Queries that worked: `"anomaly detection" fraud SQL Python`, `"anti-fraud" analyst python`, `"fraud detection" "data analyst" python`, `fraud gaming data analyst SQL` — all geo-filtered to Germany. Company-OR queries failed (noise). Web X-ray produced one bench name in four queries.

Cast: 3 close fits (platform fraud analyst; fraud rule-writer out of a large marketplace; payments fraud analyst — *the third should have been labelled an edge, see above*), 3 edges (DS+banking PhD → questions 1+2; analytics engineer with A/B+dbt, no fraud → question 3; T&S analyst, depth unknown → question 2), 2 wrong-shapes (marketing analyst in the same industry → question 4; KYC/AML at a bank → the compliance trap). One thin profile dropped (8 connections), one consultant benched despite perfect domain.

Validation: the client's real calibration, run months earlier, drew four boundaries — this set would have forced all four in one call.
