# People search: team mapping and the calibration sourcing run

Two jobs: (1) map similar people who already work at the client, for a team picture and persona-interview targets; (2) source the calibration starter set: 3 to 4 real candidate profiles the HM reacts to live on the call. Both start with resolving the corporate structure.

**For the calibration starter set, read `calibration-sourcing.md` first and follow it end to end**: it carries the full method and the reasoning (how to extract the open questions from the JD, how each profile earns its slot, the self-checks). This file supplies the search mechanics that method calls on.

## Step 1: Resolve the corporate structure

Many clients sit inside a group or have a parent and sister brands. Establish this before searching for people, because relevant colleagues may sit under a sibling brand rather than the named entity.

- Check internal docs first (a company profile often records the parent and sister brands).
- Confirm with a quick web check: "[company] parent company / group / brands".
- Record the parent, the sister brands, and which entity the role actually sits in.

Example: a mobile-games studio can sit inside a holding group alongside four sister brands. A search for the studio alone would miss colleagues listed under the group.

## Step 2: Find similar people at the client and sister brands

Look for people in or adjacent to the target role (same function, one level up and one level down), at the client and across the group.

Tool priority:
0. **The client's own systems**, when the recruiter works under a client login: org chart, HRIS or people directory, Slack member list, team pages in the knowledge base, the ATS (recent hires and their sources). These are verified and current.
1. **Internal docs**: prior role summaries often name the hiring manager, the team shape, and named contacts. Use these first; they are verified.
2. **People-data connector** (Apollo, Clay, ZoomInfo) if connected: search by company (include sister brands) and title keywords. Best source for named, current employees at scale.
3. **LinkedIn via the browser** (Cowork's built-in browser or Claude in Chrome; see `setup.md` for getting the recruiter set up): a tested, reliable way to find named current employees while the user is logged in. Run a people search such as `https://www.linkedin.com/search/results/people/?keywords=<company>%20<title>`, read the page text, capture name, title, location. Repeat per title variant and per sister brand. Open an individual profile for background when picking a persona-interview target. Mind LinkedIn rate limits: pull a focused set rather than bulk-scrape.
4. **ContactOut**: for contact details once you have the right people (browser extension or manual step; its strength is contacts, not discovery).
5. **Web search** as a fallback: partial coverage, LinkedIn blocks most queries.

Output: a short team map (names, titles, location, prior employers where known), two short paragraphs on the hiring bar the client actually hires to (where their people came from, tenure, level), and the nominated persona interviewee: a high performer currently doing the work. Mark verified versus inferred. Where a connector is absent, say so and name what a connected tool would add.

## Step 3: The calibration sourcing run

Source 3 to 4 real profiles for the live calibration walk-through. **The method (JD reading, set casting, verification discipline, self-checks) lives in `calibration-sourcing.md`; follow it end to end.** The search mechanics below are what it calls on.

### Search methods, in order (field-tested July 2026 on an anti-fraud analyst search)
1. **LinkedIn logged-in search via the browser**: the workhorse. Navigate directly to search URLs with a country filter:
   `https://www.linkedin.com/search/results/people/?keywords=<url-encoded keywords>&geoUrn=%5B%22<geoId>%22%5D&origin=GLOBAL_SEARCH_HEADER`
   (Germany geoUrn: `101282230`; find other country ids by running a search in the UI once and copying the URL.)
   - **Skills-language queries win**: `"anomaly detection" fraud SQL Python`, `"anti-fraud" analyst python`, `"fraud detection" "data analyst" python`. Company-OR queries (`fraud (CompanyA OR CompanyB)`) pull marketing and HR noise in standard search; save company targeting for Recruiter.
   - Read results with page-text extraction for headlines and locations; read the page again with an interactive-elements filter to harvest the `/in/` profile URLs from the same result page.
   - Run 4–6 query variants; each surfaces a different slice. Page 1 ordering shifts between runs, so capture what you need when you see it.
   - Each search page offers a **"Search with Recruiter" deep-link** carrying the same query: hand it to the user for the Recruiter-grade version (booleans, title filters, spotlights).
2. **People-data connector** (Apollo, Clay, ZoomInfo) if connected: title + keyword + company-tier + geo; pull profile URLs, current role, tenure. Best for company-targeted discovery at scale.
3. **X-ray via web search**: fallback only. `site:linkedin.com/in/ ("anomaly detection" OR "fraud detection") "SQL" "Python" Germany`. Tested honestly: indexing is thin, geo unreliable, most hits land out-of-country. Expect one or two usable leads per run; treat it as a supplement when the browser is unavailable.
4. **Verify before shipping**: open each shortlisted profile, confirm current role, company, location, and the one or two signals that argue the tier. A name search (`?keywords=<name> <keyword>`) recovers a profile URL when the results page has moved on. Verification is what turns a search card into a usable profile.

### Per-profile record
Name · headline · current company · location · profile URL · tier hypothesis (close fit / edge case / wrong-shape) · one-line rationale · **the question this profile tests on the call**. Mark verification level: verified (profile opened) vs snippet-only.

### Integrity rules
- Real people, real URLs, always. A flagged gap beats an invented name.
- Snippet-only profiles are marked as such; verify the top set when the browser is available.
- Where no browser or sourcing route is available, follow the skip path in `setup.md`: no calibration set this time, one spoken question in its place. Write clearly labelled archetype profiles only when the recruiter asks for them.
- Respect exclusions from the start: Move clients and any known DNC list stay out of the set.

### Delivery
The set goes into its own Word document, "Calibration Profiles - [Client] - [Role]", delivered after the prep pack (step 5 in the main instructions) and formatted for the call: one profile per block, link first, rationale and test-question visible at a glance. Where the client scores calibration in a sheet, also emit the client's calibration format (csv/xlsx) so the same set flows into scored calibration after the call.
