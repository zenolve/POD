# Starter Story — Long-form Founder Interviews (Condensed Notes)

A NotebookLM-ready single source: AI-cleaned, condensed notes from all 30 long-form
Starter Story videos (2026-01-21 → 2026-05-31). Every founder, business, revenue figure,
and concrete tactic is preserved. These are paraphrased/structured summaries, NOT verbatim
captions. Source channel: https://www.youtube.com/@starterstory

---

TITLE: I Built A $30K/Month App: Here's My Exact Process [Idea, Build, Marketing]
FOUNDER: Benji (Snag — find free items near you), 10X Studio
DATE: 2026-05-31
URL: https://www.youtube.com/watch?v=P4QodeA_lQ0

I decided to really lock in and focus on building one specific product and we've gone from 0 to 30k MRR ever since. This is Benji and in the last year he's built over 45 apps and his latest one just hit $30,000 a month in less than 4 months. But this isn't a story about one app. It's about the system behind all of them — the exact process he follows every single time to go from idea to revenue fast. The entire process usually takes around four to five hours to actually get a good app built out.

Benji's background: grew up in Asia, played by the books, 4.0 GPA, sold his first media company for six figures, worked in quant research and media companies before pursuing software products. In the past year built over 45 apps. First app was Pillar (self-improvement), scaled to 11,000 users with basically zero CAC, then stopped due to shiny object syndrome. Built HighGPT next, then 43 more products, before deciding to lock in on one product (Snag) that could scale over time with great people.

Snag is an app that helps people find free items near them. ~$30,000 MRR, 100,000+ authenticated users, 9,000 conversions, $80,000+ total proceeds, 3.3K App Store ratings (important social proof for consumer apps). Weekly/monthly/yearly/one-time subscriptions.

PROCESS TO BUILD 40+ APPS: The highest leverage thing is to find a great idea. Start from the marketing — reverse engineer the value proposition you want to show in your app first. Then think what the app would look like to attract a user in 3 seconds. Go to Figma, wireframe it, design it, feed the designs to Claude Code in your IDE and code it. Entire process ~4-5 hours to get a good app built out (without the backend).

TECH STACK: Cursor (IDE), Claude Code Max (codes the entire thing), GoDaddy (domain), Loops (emails to churned users to convert them back), Superwall (A/B test paywalls), Mixpanel (track onboarding quality), Apple developer account, Figma, Supabase (backend).

FINDING IDEAS: YouTube and Twitter are great sources of inspiration — you see people making money from all sorts of ideas and can discover underserved pain points. Or use Sensor Tower to search for ideas making a lot of money and copy the same app but make it 10% better. Example: after HighGPT launched, ~20 copycat apps appeared but they're also making hundreds of thousands of dollars because they have better UI, marketing, funnels. Ideas aren't worth much if you can't deliver the product to the end user in a better way.

MARKETING (UGC → PAID ADS): Ran UGC campaigns at scale, then turned winning creatives into paid ads. Reach out to a bunch of creators, filter one by one by interviewing to see if they have virality built in. ~10% pass rate (for every 100 creators interviewed, ~9-10 good ones). Put them on a monthly retainer + CPM structure, then test them. If they do over 50,000 views per video, those are great videos to run on Meta ads. Set up test campaigns on Meta, figure out ROAS. ROAS > 1 means you're making money. Meta ads are not linear growth — diminishing marginal returns; if you make 10% margin at $100/day, spending $200 doesn't give 20%. Watch for ad fatigue and pump out more creatives to test more options and find the most optimal ones.

UGC EXAMPLE: A soft-selling video got 240,000 views. Rule of thumb: every 100,000 views ≈ $1,000-$2,000 in direct subscription profit. Two-step paid ad approach: test campaign at ~$50/day to test whether a creative is worth scaling. If ROAS > 1 or high CTR, scale gradually: 50 → 100 → 200 → 300/day. Spent ~$3,000 total on one ad before ROAS went negative. Number of creatives matters a lot — more tickets to the lottery.

PLAYBOOK TO START OVER (consumer mobile app in 2026):
1. Find an idea that is actually scalable and that you can implement properly — highest leverage step. A good product doesn't need much "marketing"; people convert at a higher rate and don't cancel because the product provides real value. Snag: pay a few dollars/month, get access to products worth hundreds of dollars → high conversion.
2. Start building — open your IDE, use Claude Code. Early on you'll build single-use-case apps (essentially API wrappers), which is fine. Use the API properly, make sure the app functions, and add user authentication so you can get approved on the App Store.
3. Distribution — if you don't have money for UGC creators/influencers, film them yourself. Filmed thousands of videos for previous apps himself. Find an editor to edit at scale, package deal to run as paid ads. The greatest skill right now is the ability to create content and get views/engagement in the algorithmic TikTok world.
4. Iterate on the product for higher LTV, lower CAC. Focus on generating real value — business is the transaction of value.

ADVICE: Create your own luck and meet the right people. Learned a ton in a few months from meeting Blake Anderson. Working with great people makes you improve to match their pace. Not meaningless networking — keep doing the work, iterate, learn from mistakes, and you'll reach a point where you can work with great people, which leads to great opportunities and more learning. "You are the average of the five people you surround yourself with."

PRODUCER REFLECTION (Gus/Pat): Benji has a proven system, knew the numbers and creatives cold. He's not worried about things going wrong — straight to the point, doesn't overcomplicate. Smart builders act instead of worrying "is my idea going to work, what will people think." Build apps, get your ROAS up, you're good to go. It's math. But you still have to find your idea and build something.

---

TITLE: I Built A Micro-Version Of A $1B SaaS. Now I Make $50K/Month
FOUNDER: David (+ brother Daniel) — Shipyard, an AI app builder
DATE: 2026-05-28
URL: https://www.youtube.com/watch?v=Nnpz1wsTjBI

NUMBERS: ~$25.6K MRR, gross volume ~$71K/month (subscriptions 90% + one-off credit top-ups 10%), ARR $307K. ~690 paying users, ZERO free users (no free plan — reinvest revenue into product for paying users). Cheapest plan $25/month. Pricing = pay for credits to build apps; separate "cloud credits" (build backends) vs "builder credits" (everything else).

BACKGROUND: David and his brother are both NON-technical, have built SaaS/tools since 2019, never liked coding so they learned marketing instead. First real success: Legit Check (luxury goods authentication) which funded everything after — was itself featured on Starter Story years ago. Built/scaled/exited/acquired several companies. Built an AI coding app with no coding experience.

CORE STRATEGY — "copy-paste" / niche down a proven giant: Between 2020-2025 they watched no-code/AI app builders explode (Base44 hit $3M ARR in 6 months; Lovable hit $1M ARR in a week, now valued at $6B). Reasoned that owning even 1% of a massive market is life-changing. Plan: "Find one common pain point and triple down on it." You don't have to invent anything new — find a proven idea, niche it down, build your own version.

HOW THEY BUILT IT: Started small — just them + one developer. First version was rough and broke a lot, but they shipped it anyway instead of waiting for perfect. Months 1-2 toughest; by month 3 had a confident working product; month 4 caught up to competitors; months 5-6 shipping features competitors didn't have. Constantly studied other players to move faster and avoid their mistakes.

TECH STACK: Crisp (support), Notion (knowledge base), Frill (roadmap), Charge (email marketing), Webflow (landing page), WordPress (SEO blog + programmatic pages), Anthropic Claude models (core AI), GitHub (version control), Vercel (hosting), Railway (cloud), Neon (databases), Typefully + X Premium (marketing), Tolt (affiliates).

GROWTH (0 → $50K/mo, NO paid channels ever):
- Launched MVP on Product Hunt week 1 → first $50 MRR.
- Reddit drove initial traction — regularly got ~400 upvotes, pushed them from $50 to $1K MRR.
- High-intent SEO keywords: "[competitor] alternatives", "how much does [competitor] cost".
- Build in public on X/Twitter. Around day 50 of building in public, X "went parabolic" — made ~$20K MRR in 1-2 weeks just by dogfooding the product.
- Tactic from Rob Hallam (Super X): always put your product link in the SECOND tweet to squeeze more attention/traffic.

DIFFERENTIATION (how they carved out their 1%): Competitors only build websites/web apps. Shipyard also builds mobile apps, Chrome extensions, and bots (Telegram, Discord). Found the gap by reading competitors' Trustpilot pages, public roadmaps, and joining their Discords to see what users complained about — a support-chat request ("I want to turn this website into a mobile app") sparked the mobile-app feature. Core promise: eliminate all technical terms — "transforms your thoughts/ideas into a live business that can make money with zero skills required."

ADVICE: Start with something you genuinely know/care about. Look at a big industry and ask "What would this look like if it was built for people just like me?" Take what already works and niche it down (e.g., Duolingo but for cooking; a workout app turned social network; smaller versions of Calendly/Typeform/Intercom). Read reviews, find what people dislike about the giants, double down on fixing that. Keep your head down and keep building.

PRODUCER REFLECTION: Andrew Chen (VC) essay — inventing something new is hard because you must change how people behave, a huge bet that's illogical for a bootstrapper. You don't need to execute perfectly if you're in a good, growing, high-margin market — you can get things wrong and still succeed. "Every business idea is taken" → here are 50 ways to make your app different.

---

TITLE: I Built A $30K/Month in 35 Days (PepAI)
FOUNDER: Cedric Roberge — PepAI, a peptide-tracking app
DATE: 2026-05-24
URL: https://www.youtube.com/watch?v=vbEKEWtnndU

NUMBERS: $50,000+ total revenue in 7 weeks. Last 28 days: ~$33K revenue, ~2,000 active subscriptions, MRR ~$11K. Pricing: $45/year or $10/month, 3-day free trial. Hard data via RevenueCat. App ranks #3 organically for "peptide tracker" in the App Store.

WHAT IT DOES: Helps people track peptides safely (dosing calculator, injection-site logging, a Duolingo-style quiz/education feature, a research library citing PubMed, plus lifestyle features — meal scanning, nutrition, weight tracking, Apple Health, progress photos).

BACKGROUND: College student. First app (Oct) was a student marketplace for Univ. of Oregon — got ~800 users by walking campus, but made $0. Lesson: need a SPECIFIC niche of people who would pay. Marketplaces are hard to monetize.

HOW HE FOUND THE IDEA (trend-spotting): Roommate mentioned peptides; a week later peptides hit his TikTok For You page. He looked it up — huge on social media, no successful app existed (a couple old ones, none successful). That gap = the opening. Three signals aligned: friend mentioned it + saw it trending on TikTok + genuine personal interest. He read every review of existing apps (what people like/dislike/wish for), then had Claude research and build the best version.

HOW HE BUILT IT (~2 weeks, vibe coding): Replit (describe what you want, it builds it) with Claude as his "senior developer" for setup (RevenueCat for subscriptions, Resend for email, anything he didn't know). Firebase backend for user data. Hardest part: Apple rejected it ~a million times (medical-advice concerns) — solved by studying how similar apps phrase things to find the approvable "good spot." Tip: you can EXPEDITE Apple review for major issues → reviewed in ~2 hours instead of 2 days.

PLAYBOOK TO START OVER (find a trend → app, mid-2026):
1. Live on social media — scroll TikTok/Instagram every free second; find what everyone's genuinely obsessed over. If multiple people post about it, it can become a tool people use.
2. Check whether apps already exist in the space. If a few exist (but none marketed successfully), that's a GOOD sign — validated demand, just no winner yet. Zero apps can also work.
3. Mine competitor reviews — go through every review, find likes/dislikes/wishes, feed it all to Claude/ChatGPT to generate your app idea and foundation. (Pat: a founder rebranded their whole app from reviews + Stripe cancellation reasons + support requests → grew ~350% after.)
4. Find influencers in the niche and get them posting BEFORE launch. He DM'd creators, made Reddit posts, built a 300-person waitlist pre-launch. Results: one Instagram STORY post → $1,000 revenue; that creator's first real post hit 50,000 views → ~$4,000 in a day; ~$10,000+ total attributed to that one creator. Early trends have under-the-radar influencers who don't realize how powerful their audience is.
5. MARKETING/DISTRIBUTION matters more than the idea or app quality. If you don't have a plan to market and distribute (influencers, ads, etc.), don't even build it. ("First-time founders think about product; second-time founders think about distribution.")

ADVICE: Never give up, fully believe in yourself — even when friends mock the idea. Goal: scale PepAI to $1M/month.

PRODUCER REFLECTION: AI coding tools are game-changers for "regular people" with ideas. The biggest underrated lesson: BUILD ON A GROWING TREND — you get tons of free users/revenue; even a crappy app succeeds if it rides something exciting (vs. something dying). Keep a "magnifying glass" on social media instead of brain-rotting.

---

TITLE: I Make $1.7M/Year In The Most Boring Niche Imaginable
FOUNDER: Bo — co-founder of Savvy Nomad (helps US citizens abroad pay less US tax)
DATE: 2026-05-21
URL: https://www.youtube.com/watch?v=BHhg-l9AZpM

NUMBERS: $1.7M/year ARR, $140,000 MRR, ~1,400 customers, ~$10M saved in state taxes for customers, only 6 employees. Adds 120-150 new customers/month. Three subscription tiers (basic "domicile", mid-tier most popular, "domicile premium"); charges customers up front. The product = "American infrastructure for people who don't live in America anymore" (e.g., state domicile change).

BACKGROUND: Software engineer who chose to get in front of customers (parallel to Pat's SWE→media path). Due to the war in Ukraine, rebuilt his life internationally → pulled into international taxation → earlier digital-nomad-tax startup (which he shut down). Saw Americans were the biggest, most underserved group. Co-founder met California surfers stuck paying CA state tax abroad, built an initial version; Bo joined as marketing/business co-founder.

WHY THE BORING BUSINESS WORKS (4 reasons):
1. Low competition for REAL demand — unsexy markets have fewer talented founders chasing very real problems; the opportunity-to-competition ratio is far better.
2. Extremely high willingness to pay — people don't want to deal with taxes/compliance/domiciles; they'll pay to forget about it.
3. Concrete, QUANTIFIABLE value — you can say "here's the financial benefit, here's the cost." Rational, easy decision → you sell less. (vs. AI apps selling a vague "brighter future".)
4. It matched the team's complementary strengths.

THREE BORING MILLION-DOLLAR IDEAS he'd build:
1. Productize immigration workflows — people pay agencies $8-15K for what is essentially a workflow problem; a product (guided process, templates, lawyer review at the end) could charge $1-2K and feel like a steal.
2. Help people move to tax-friendly jurisdictions (Dubai, Costa Rica, Malaysia) AND cleanly exit sticky ones (Canada, UK, Spain have exit procedures, notifications, exit taxes). Productize entry and exit.
3. International banking, asset holding, estate planning for founders/investors spread across countries (e.g., open a Singapore bank account, choose jurisdictions for real estate/IP). No real product exists. Key insight: it's often the SAME customer at different life stages = one customer, multiple revenue events.

PLAYBOOK TO START OVER ($0 → $1M in an unsexy niche, 2026):
- Start with painful problems where people are ALREADY overpaying — categories where people are stressed, confused, losing money: taxes, compliance, legal, workforce, residencies, banking, documentation. The less people want to deal with it, the more valuable to solve. Look at how they currently solve it — usually two extremes: DIY (scattered blog posts/Reddit threads) or hire a pro for thousands. The gap is your product.
- Evaluate competition RELATIVE to opportunity — don't just ask market size; ask how many smart, capable founders actually choose to build here. Unsexy = real demand + high willingness to pay + few competitors. That asymmetry is your edge.
- Pick ONE workflow, productize it, build a recurring layer on top. Don't build a platform — pick the most common, most painful workflow and make it a repeatable step-by-step product. For them it was state domicile change; they didn't solve all international tax, just one thing really well.

PRODUCT/ONBOARDING: Asks qualifying questions, SHOWS the customer how much they can save (transactional value), then presents the best-fit plan. Most customers finish the online part in <1 hour.

TECH STACK: Bubble (entire product), Framer (marketing site), Ghost (content), ChatGPT + Claude (operations), Ahrefs (SEO), Customer.io (email), Power BI + BigQuery (dashboards/reporting on a data warehouse), TurnKey (churn analysis), Stripe (billing), SavvyCal (scheduling).

ADVICE: "The difference between a winner and a loser is the winner tried one more time." He shut down his previous startup, felt defeated, but tried again. Just go solve a real problem instead of chasing every shiny AI tool.

PAT'S TAKE: "I'd rather make $2M/year in a boring business than $20K/year in a sexy AI app." Decades of regulation (tax/compliance/immigration) isn't going away, and now AI + software can productize these services worldwide.

---

TITLE: My Two Apps Make $150K/Month Each
FOUNDER: Nicole — Glamour (Glam Mob) + Sprout (formerly Prepear AI), plus 2 stealth apps
DATE: 2026-05-17
URL: https://www.youtube.com/watch?v=32vqaJa90kw

NUMBERS: Built 4 apps in 2 years. Glamour: ~1M users in 6 months, peak ~$150K MRR, ~2M total downloads. Sprout: ~$250K MRR in 8 months. Two new stealth apps already ~$200K MRR combined, growing fast on the same system. Distribution scale: now ~400-500M monthly views across TikTok/Instagram/YouTube Shorts (up from ~100M); a 7-day period once hit 400M views; at peak managed ~200+ active creators simultaneously. Hard paywall on all apps (weekly/monthly subscriptions). Nicole does everything NON-coding: design + distribution.

BACKGROUND: Built first two apps in college. Started a TikTok podcast that went viral (10K followers in 10 days), didn't want to be an influencer, moved to SF, did marketing at a tech startup, met co-founder Aaron (YC / H0). Decided to start an app together in a 10-minute call → became Glamour.

IDEA SOURCING: Loosely inspired by UMAX (a looks-maxing app for men) → built a glow-up/makeup app for women (no such app existed yet). Sprout came from pivoting toward college/post-college students (higher purchasing power). They deliberately chose categories with proven customers and existing playbooks.

CORE PHILOSOPHY: AI made building easy, so marketing/distribution is now harder and more important than ever. "It's not about the features you build... it's about distribution." Design IS distribution — design the app to be innately viral for social media, then test viral formats; when one wins, double down and scale. Turn virality into a SYSTEM/process — "you can always maximize the surface area of your luck."

GROWTH PLAYBOOK (consumer apps, 2026):
1. FIND your viral distribution strategy — try each for ~2-3 weeks and "milk the hell out of it": (a) Reddit marketing, (b) TikTok/IG faceless content (slideshows, CTA variations, videos), (c) face UGC (AI UGC or real creators), (d) if you have capital: paid ads + influencer marketing. Keep iterating within one category until something hits.
2. Build a proper UGC SYSTEM. Rule: you must understand your app and content better than your creators do. Start by being your own UGC creator, or onboard 2-10 creators and train them until they go viral, then scale. The system:
   - SOURCING: find creators that fit your content style (talking-heads need good talkers; reaction videos need expressive faces). Inbound = application forms in UGC group chats / Instagram / Reddit / sites like Sizzle. Outbound = hire VAs to reach micro-influencers.
   - ONBOARDING: (1) Interview/vibe-check each creator for seriousness. (2) Put them through a tailored creator COURSE (Typeform + video modules + a quiz per module). >50% of creators who complete Sprout's course go viral within 2 weeks.
   - MANAGEMENT: hire influencers or your top UGC creators to manage the rest; run via Discord; bi-weekly/monthly feedback calls. Find the system that fits your style.
3. Once big enough, systematize/optimize further — referral systems for creators, dashboards for growth analytics.

PRODUCTS: Glam Mob — onboarding → upload selfie → face scan → color analysis, glow-up guides, makeup looks, product recommendations (paywalled). Sprout — onboarding → tailored job postings → swipe right to AUTO-APPLY on the company site, swipe left to skip; also tailored resumes.

TECH STACK: React Native (apps), RevenueCat (revenue tracking), Superwall (paywall), PostHog (analytics), Sideshift (recruit UGC creators), Attio (CRM), custom portals as needed.

ADVICE: Enjoy the journey, not just results — there are always bigger numbers to chase; stay present and enjoy being a builder.

PRODUCER REFLECTION: "There are levels to the game" — she's playing on expert mode while beginners struggle to post one thing. The level you need for serious consumer apps today: not "one video this week" but a full system. The true entrepreneur, when something works, keeps doing it until it stops — then replicates across multiple apps.

---

TITLE: I Built a $20K/Month App in 83 Days
FOUNDER: Brian Shin (+ girlfriend/co-founder) — Once, a digital disposable-camera app for events
DATE: 2026-05-10
URL: https://www.youtube.com/watch?v=r4R_Hlw7sbo

NUMBERS: $20K MRR within 83 days of launch (launched Dec 2025); ~$22K the recorded month. ~10,000-12,000 weekly active users. ~300 events in Feb, ~700 booked for March. Pricing scales by guest count: 10-person party = $2; 150-person wedding = $50 (more guests = higher tier).

WHAT IT DOES: A digital disposable camera for weddings, birthdays, corporate events — captures candid group photos in one shared album, replicating the magic/limitations of a real disposable camera (can't see photos right away, limited shots, delayed reveal).

BACKGROUND: Previously co-founded a venture-backed, sales-driven 50-person B2B startup — learned what a real fast-growth business takes. Discovered the bootstrap/indie-hacker scene (small, safer bets vs. betting your whole life). Wanted full product control, so went fully bootstrapped with his girlfriend.

IDEA: He and his girlfriend traveled to 7-8 countries carrying a disposable camera everywhere. Its limitations made the experience feel "real." Idea: build a digital experience replicating the disposable camera.

BUILD: First version = a web app in ~1-2 weeks with just core features, built for an upcoming Halloween party (printed invite codes for guests). It broke many times but validated the core idea (people love pooling candid event photos into one album). Then they THREW OUT v1. Belief: a consumer app is a craft — uses AI heavily for dev/finance/everything, but NEVER for design ("design requires taste; the more opinionated, the better"). Lives on Claude Code.

TECH STACK: Figma (all design), Claude Code Max (dev) + Conductor (run several Claude Code instances on different worktrees at once), Supabase (database/backend), Vercel (web aspects).

VALIDATION — the "COMMITMENT METRIC" (the standout idea): Make people commit BEFORE writing a single line of code. Two parts:
- Personal network: open X, LinkedIn, Instagram/Facebook side by side; go through your entire friends list; circle everyone with a potential event coming up. He found 4 friends with events (Halloween, birthday, wedding, networking).
- Beyond your circle: searched Instagram #wedding / #birthdayparty, listed ~250-300 people, sent a simple 2-3 sentence cold message. ~15 replied, booked ~12 events for one month → "this has market potential."

PLAYBOOK TO START OVER (0 → $20K in 83 days):
1. Define your COMMITMENT METRIC — commitment from yourself (a specific date + number of customers/metric to hit) AND from users. The user's commitment signaling validation doesn't have to be payment; for Once it was event hosts actually using the product at an event (almost a proxy for payment).
2. Exhaust your personal network — open all social profiles, reach anyone matching your ICP. Beware the "Mom Test": friends/family get over-excited; be honest so you're validating, not fishing for encouragement.
3. Build a quick mockup — don't spend more than 2-3 days (Figma or AI tools). However crappy, get a simple product to show users.
4. Go where your users live (Reddit, TikTok, YouTube) — this channel becomes your future main marketing channel. Do tons of cold messaging: "if you haven't been banned at least twice, you haven't tried enough."
5. Set a number that gives you enough signal/confidence. For them: 10 events with an actual date and an actual commitment to use the product, BEFORE writing any code.

ADVICE: Stop overthinking and just launch. Don't obsess over marketing/sales mechanics when going 0→1; spend that time talking to users and shipping a v1 in 1-2 weeks. Your assumptions often collapse once real users touch it — you may be solving a different problem than you thought.

PRODUCER REFLECTION: AI tools are a crutch — they let you skip the hard part (talking to people) by just building. In a world where anyone can build anything in an hour, the secret sauce is going out and setting a commitment metric ("10 people say they'll use this before I finish it"). The scary part — messaging people you haven't talked to in 10 years — is exactly the high-value work.

---

TITLE: How I Work: $77K/Month Solopreneur
FOUNDER: Mark (solo entrepreneur; "Trust the Manual"/TrustMRR-style verified-revenue marketplace + many small apps)
DATE: 2026-04-26
URL: https://www.youtube.com/watch?v=D4fkiQfzw_I

NUMBERS: $77,000/month as a SOLO entrepreneur. Has built 35 startups; ~30 of them make basically nothing (hit rate ~5%). One product — a verified-revenue leaderboard that became a marketplace — alone makes $35K+/month. Shipped ~300 features on that marketplace in the last 3 months and 6 new apps in 2026. First day of a recent macOS app launch did ~$1,000.

CORE PHILOSOPHY — KEEP SHIPPING / roll the dice often: He's met hundreds of people with a brilliant idea stuck in their head/computer that they never shipped — but can't recall anyone who said "I tried 10 times and it never worked." If you roll the dice once and stop, nothing happens; if you keep playing, eventually one roll works (happy users, money, quit your job, roll more often). "The only way to validate an idea is to ship it with a buy button." Don't get over-attached to one project that might take 3 years to pay off — it's easier to keep rolling and ship a new idea that might take off 100x faster, and every ship teaches you more and grows a small audience. "Don't you dare give up."

DAILY ROUTINE (same day ~365 days/year):
- Coffee + breakfast with wife → gym together (training for Hyrox) → home.
- A protected DEEP-WORK block of 4-6 hours: phone OFF, no email, no customer support, no social media, completely offline. Reason: checking email surfaces bugs he'd fix instead of CREATING; social media triggers AI FOMO and kills an hour + his motivation. He only CREATES in the morning (opens code editor, codes).
- ~4pm: go online — Twitter, email, the boring/less-creative work.
- 5:30 dinner (watches Better Call Saul) → walk → switches EVERYTHING off (phone off, computer off, no work talk) → reads → bed at exactly 9pm. 30-60 min wind-down routine (dim lights). No alarm; wakes ~6-7am.
- SLEEP is underrated — good sleep = emotionally stable + locked-in focus (can spend 4 hours on one thing).

ON IDEAS: Don't think about the output — think "what is the thing I want to exist?" He built a macOS app that uses a webcam to check your posture because he sits like a shrimp at his computer ("this app must exist"). Trust the Manual started from a Peter Levels tweet about people faking revenue → "what if I make a leaderboard of verified revenues" → became a marketplace doing $35K+/mo. Feedback from users surfaces problems → more ideas. His to-do list grows every day (more ideas than he could build in 200 years); after finishing a cycle he picks whatever feature would have the most user impact / make him happiest.

ON AI (controversial take): The single KPI that matters hasn't changed in the AI era — it's still the NUMBER OF THINGS YOU SHIP. People get obsessed with productivity (teams of background agents) but his setup is "the most boring ever": same code editor, a single-threaded AI chat on the right; talk to AI, it makes a feature, release, move to the next. You could do a lot with an early ChatGPT + a basic editor.

ON FEAR OF SHIPPING: The biggest barrier to success is the little voice saying "it's too early / not good enough." It's a one-time fear, like the gym — you kill 80% of it by doing it once, the remaining 20% with more iterations, then it gets easier and easier.

---

TITLE: I Spent 24 Hours With A SaaS Millionaire
FOUNDER: Jeremy — Task Magic (browser-based automation SaaS), sold for millions
DATE: 2026-04-19
URL: https://www.youtube.com/watch?v=iVy5J7iE-3Q

NUMBERS: Task Magic scaled to 60,000+ users, ~8,000 paying customers, some months north of $400K, ~$3M annual revenue, made the Inc. 5000 list with effectively one employee (him + his CTO). Sold on Acquire.com for mid-to-upper seven figures (millions). The companion product "Mail Lead" alone brought in almost seven figures.

BACKGROUND: Started NON-technical hacking on V1 (a slow no-code app builder) in 2019; monetizing it let him hire his first employee. Rebuilt and relaunched in 2020 → seven figures. In 2021 stepped back to ask "what's the bigger opportunity?" — customers wanted automation, so they leaned into browser automation (Zapier users were limited by APIs; Task Magic automated messy human browser behavior with a click). Grew from a few hundred grand (2021) to ~$3M in 3 years.

THE "TENTPOLE STRATEGY" (the core lesson): Instead of building ONE product and marketing it, build other small, cheap SIDE PRODUCTS that rank on their own (SEO) and funnel paid users into the core "tentpole" product. With today's no-code tools you sell FUNCTIONALITY, not information (the old way of marketing with free info tools). Steps:
1. Build for the customer's NEXT problem. Task Magic's customers were business owners/agencies/freelancers who need sales.
2. Build something very SIMPLE and SPECIFIC — they built "Mail Lead," a simple email-outbound platform. SEO rewards specificity: "cold outreach email for [sector/automation]" ranks faster/higher than a general "Task Magic automation." Sold to existing customers AND attracted new ones via Mail Lead's own SEO lift (≈ seven figures alone).
3. Build a natural UPGRADE PATH — Mail Lead user wants to connect to other apps → clicks the "automation" button → it's Task Magic built right in; hit a limit → now paying for Task Magic.
4. STACK AN ECOSYSTEM — Mail Lead users need leads to email, so they built "LeadQuest.ai" to find leads; emails flow into Mail Lead; automation flows into Task Magic. Each product feeds the others. These aren't separate side hustles — they serve the SAME ecosystem.

MONETIZATION INSIGHT: Early on, people didn't want constant subscriptions, so to bankroll itself they used LIFETIME DEALS + usage-based pricing.

IF STARTING OVER: Take LeadQuest as the new tentpole and stack products around it; stacking makes them help each other.

THE REAL SALE STORY (behind the glamour): "I want to exit before I turn 38" but had no idea who'd buy. Talked to brokers, listed on Acquire.com → 100+ inquiries. Bought out investors, which depleted personal + business bank accounts; put $50K on his Amex and went ~$200K into personal debt to pay bills during the ~6-7 month process. Back against the wall (couldn't lose the house, ~$9K mortgage, young daughter). It sold; walked away with millions.

ADVICE: Everyone online is "toxically positive" — all crushing it, none sharing the lows (and then a business quietly dies). Focus on the problems; have your bad day / bad video and SHARE it. Also: "If you do what I do, you'll hit seven figures — it might be product five, but cumulatively you'll get there." Pat's takeaway: AI will change SaaS; Jeremy treats PRODUCTS like content — you can spin up little products overnight that each help your customers and cross-sell.

---

TITLE: I Made $1.5M From An App You've Never Heard Of
FOUNDER: Jordan — Parakeet Chat (AI learning/communication for incarcerated people)
DATE: 2026-04-12
URL: https://www.youtube.com/watch?v=bq3-qH-CpYQ

NUMBERS: $1.5M total lifetime revenue; ~$300K in 2025 (~$300K/year SaaS). ~30,000 people have tried it = ~20% of the entire US federal prison population; ~100,000 family connections enabled; ~9M messages sent. Profitable within the first month. Pricing: $15-20/month (discount for yearly). He's solo-bootstrapped two $1M+ businesses (the other: self-driving cars/drones contract work).

WHAT IT IS: Parakeet Chat is an AI learning + communication app for incarcerated people — there is NO downloadable app. Users (inmates) interact via the internal prison EMAIL system: they email a specific address, the bot processes it and replies (looks things up on ChatGPT, sports stats, etc.). Biggest use case: studying case law / legal rights; also communicating with family. Built entirely around the prison's technical limitations.

UNUSUAL BUSINESS MODEL: Users ≠ customers. The users are inmates (inside); the customers are their families (outside) who pay the monthly SaaS fee.

BACKGROUND: Wanted to be a scientist/engineer/astronaut; master's of science; worked on a moon rover and robotics in grad school; took a Fortune 100 corporate research job, found it boring, taught himself to code, moved to SF, got into entrepreneurship. Had ~a decade of software experience before this project.

BUILD: ~1 month to build the prototype (used to validate) + another month for the payment system → profitable from month 2. Tech stack: TypeScript, React (frontend), Postgres (DB), Redis (in-memory + queuing), Auth0 (login — don't write your own), Prisma (DB calls), Zod (validate external data to a schema), lots of Docker. Now hasn't opened his code editor in 3-6 months — AI writes all the code ("AI is the new tech stack"). On language choice: it doesn't matter — pick what's interesting; the tech stack matters far less than SHEER SPEED.

IDEA ORIGIN: A client he was building a mobile app for was suddenly sent to prison. Jordan kept in touch (paper letters for years); the client explained that prison services are a massive scam — low quality at high prices. Jordan figured he could do better.

VALIDATION (key lesson): Prison is a CLOSED ecosystem — can't send a landing-page link or collect emails. So validating the idea and building the MVP were the SAME thing: he described the better/cheaper tool to his prison contacts, got tons of responsive feedback, people told other people, and he had 200 users within a month. His broader point: "The specifics of HOW you validate aren't as important as the FACT that you must validate." Most people fall in love with their idea and spend 12 months building a perfect app no one has seen. Validation isn't a framework — the real question is "do you actually want to validate?", because validating means your idea might die. Accept that you must validate and be willing to let your idea die. → Validate fast, often, early.

GROWTH: Pure WORD OF MOUTH — a few inside contacts showed others, who showed others. "Apple doesn't have customers, they have cult members" — a good product creates zealots. Added an internal referral system (a customer who recruits a paying customer gets ~a month of free credits). Think about growth like a SCIENTIST: experiment, be willing to fail, run a (probably terrible) strategy, get data back, iterate.

ADVICE: "Everything you think about business is wrong" — most people's ideas about most things aren't grounded in anything if they haven't done it. There's no such thing as overnight success — it took him 10 years of making mistakes to reach this point. To be a successful entrepreneur, start RIGHT NOW: come up with some "stupid/idiotic" idea everyone says won't work and just do it (in a controlled way that won't ruin you). You'll learn more from one controlled mess-up than from reading 20 books.

PRODUCER REFLECTION: Building niche apps for small communities may be the future of AI/business. Young successful founders aren't lucky — they just started earlier and are 6-10 years into making mistakes.

---

TITLE: My App Makes $20K/Month (niche weight-cutting app)
FOUNDER: Ethan (19) — Cut Coach, a weight-cutting app for combat-sport athletes
DATE: 2026-04-08
URL: https://www.youtube.com/watch?v=PIXXEAfo6MY

NUMBERS: $20,000 in a single month; $0 → $60,000+ total revenue in ~6 months; ~39,000 downloads. Dropped out of college a year ago. App = Cut Coach, gives science-based weight-cut protocols to combat-sport athletes (huge demand during wrestling season).

BACKGROUND: Built first app (summer 2024) to automate his mom's work — took ~6 months. Built another using only AI tools → realized how fast AI was changing development → left university (was studying computer engineering). Early 2025 built several apps but DIDN'T MARKET them (his big mistake). Discovered Cursor → building got fast → shifted focus to learning SALES & MARKETING instead of only development.

IDEA: A provincial judo + national wrestling champion who always had to cut weight and never knew how until a coach gave him a proper plan. Combined his passion (wrestling) with his hobby (building apps). Note: this is a TINY version of a big app (like Cal AI) for one specific niche (combat-sport/wrestling weight cuts).

BUILD: Started June 2024 with Cursor + ChatGPT; ~1 month for the MVP, gave it to his wrestling club to beta test. V1 had the COACH give plans to athletes → too much friction, club didn't use it. July-Aug he flipped it so the APP gives weight-cut plans directly to athletes; tested cuts on himself; full redesign; released September.

PLAYBOOK TO START OVER (niche app, 2026):
1. Solve a problem within your HOBBY — you already understand and enjoy it, so it's easier to solve problems others share. Ask ChatGPT for app ideas within your chosen niche to brainstorm beyond what you'd think of.
2. Open Figma and design right away; for wireframes, go to a popular/similar app in the niche, take elements from its layout and ADAPT (don't copy exactly) — stand on the shoulders of giants (e.g., Duolingo has tested their onboarding for years).
3. Code it: tell Cursor to build the frontend first to match the Figma design, then build the backend. Stack: Cursor + ChatGPT (dev), Supabase (database), Vercel (landing page + JS), OpenAI API (AI features), RevenueCat + Mixpanel + Superwall (paywalls/analytics), cron jobs (scheduled automations).
4. MARKETING — start with organic posts (idea-spied from same-niche social pages). First video: a UFC fighter before/after a weight cut + a CTA. Videos got few views (200-500) but VERY high intent → 10-15 downloads/day. A unique product solving a specific pain converts very well even with low views — you don't need millions of views; 5-10% conversion on views is huge. Niche apps are a big opportunity.
5. SCALE with influencer marketing — niche = few big influencers, so partner with SMALL creators. Find them by scrolling your TikTok FYP / Instagram Reels and DMing; most said yes. Started with creators at ~1K-10K views/video, later moved to 20K+ views/video. Then put the influencer videos into PAID ADS → added a lot of extra revenue and scaled faster/more efficiently.

PRODUCT: Open app → shows nutrition limits to stay within → log meals (auto-extracts nutritional values) → log daily weight to track progress → recommended meals to stay within limits and make weight on competition day.

ADVICE: "Follow my own advice" — he used to make decisions based on others' opinions even when he knew the right answer deep down, living other people's lives. Now he adapts others' advice to his life rather than letting it control him.

PRODUCER REFLECTION: No niche is too small — weight cutting for wrestlers feels narrow but it's a painful problem for a passionate, competitive community (high school/college sports) where parents/athletes will pay $30 because missing weight costs far more. If you're excited about a hobby, lots of others are too — build the niche up.

---

TITLE: How This App Makes $35K/Month
FOUNDER: Flo (Germany) — Money AI, an AI expense-tracking app
DATE: 2026-04-05
URL: https://www.youtube.com/watch?v=rGLXc1GmsaI

NUMBERS: $35K+ MRR — but spent ~1.5 years scaling it to only $300 MRR solo, THEN partnered with ONE content creator and grew to $35K MRR in just over a year (over 10,000% growth). Subscription app, hard paywall + 7-day free trial (A/B testing showed hard paywall beats freemium). Quit his job this year to go full-time.

WHAT IT IS: A minimalist money/expense tracker that makes data entry frictionless via AI (voice input, Apple Pay automation / Shortcuts integrations, AI reports you can query like "I want to save €300/month, where should I cut back?"). Deliberately NOT bloated like other expense apps.

BACKGROUND: Wanted to study something creative, ended up in computer science, taught himself iOS, became a mobile UX lead. Built side projects next to his job; none succeeded until this one. Built Money AI for HIMSELF (kept quitting other expense apps because they were too cumbersome) and combined that with newly-usable AI. Key lesson from a prior failure: a previous app took 2 years and nobody cared — so this time he shipped the first version in 1-2 months and iterated continuously.

THE BIG STRATEGY — ONE high-quality influencer with SKIN IN THE GAME: A fairly big influencer from COLOMBIA found Flo's socials linked in the app and reached out. The first video (late 2024) 10x'd MRR within a week; ~$8K within a month. Partnership structure: a fixed monthly retainer + a share of PROFITS (they switched from % of revenue, which didn't scale well, to % of profit). Profit-share means the creator is incentivized to do what's best for the app — he constantly thinks about how to make the best videos and is the creative mind behind ideas, so Flo doesn't have to. They post only 3 VERY HIGH-QUALITY, story-driven videos per month (quality over quantity). They don't usually get millions of views, but the views convert at a high rate. Growth steps over time: walkthrough video → $7.8K MRR; another short video → $13K; a WWDC (invited by Apple) story video → 1.7M views, +~$5K MRR; a much-wanted feature video → over $35K.

PLAYBOOK — landing an influencer partnership (technical founder, 2026):
1. Find ALIGNED partners — the influencer's lifestyle, tone, and audience must match your product. Flo wanted charisma + someone who connects with viewers (replies to comments — important since users will have questions) + tech-AND-lifestyle (not pure tech), so the audience cares about his story, not just specs.
2. Warm up the relationship — follow and comment on their videos beforehand so they recognize you; if no time, at least be upfront (don't fake it).
3. Be VERY SPECIFIC in outreach — don't send "I love your content, let's collaborate." Reference a specific video/moment/joke so they know you actually watch (e.g., "I loved how you made that little detail look so cinematic").
4. Connect the dots to your product — show genuine ALIGNMENT, not just a transaction (his audience values aesthetics + nice tech; Money AI is minimalist-aesthetic + AI-heavy).
5. (MOST IMPORTANT) Acknowledge their value and signal willingness to PAY very early — lead by making clear they'll be incentivized. Bonus: show examples of products in that niche already making money (look up on Sensor Tower). Sample pitch: "I understand the value of what you do — you can reach millions with a single video. I'd love a long-term partner and to share the app's profits. It might not be much at first, but other apps in this niche make $50-100K/month with the right distribution." (gives a future mental model)
FINAL TIPS: Be BRIEF (creators get hundreds of emails/week). Bonus points for a personalized video mentioning the creator's name/content (most won't do it). Put your social handles in your app/profile (first thing you should do) so creators can find you and reach out — better negotiating position. Look BEYOND the US — huge opportunity with creators in other markets (his partner is Colombian).

TECH STACK: Xcode (native, free), Claude Code (Max plan, $100), RevenueCat ($400/mo — revenue stats + A/B tests), Appwrite ($25 — backend/auth/DB), OpenAI (easier tasks) + Anthropic (deeper analysis, ~$200/mo), Helm (App Store Connect, $175 lifetime), Figma (free).

ADVICE: He was reluctant/intimidated by Meta Ads, afraid of wasting money — but the creator's great videos make perfect ad creative. They started a few weeks ago with great results; should have started sooner.

PRODUCER REFLECTION: The "influencer-for-equity" / profit-share model is great for developers who aren't content creators, and will get bigger. Also: "it's just another budget tracking app" — and still makes great money, because what matters is DISTRIBUTION (and tapping non-US markets like Colombia/France/Argentina).

---

TITLE: I'm 14 And I Built A $14K/Month App
FOUNDER: Evan — Locked, a gamified health/fitness (habit/focus) app
DATE: 2026-04-01
URL: https://www.youtube.com/watch?v=dWeoSKLt_fc

NUMBERS: $14,000/month in a few months. Pricing: $40/year (with 3-day trial) or $7/week; an ABANDON paywall (if user X's out) offers a discounted $20/year. One influencer video (creator "Jeremiah Jones") drove ~$3,000 + ~1,800 downloads at ~1M views across platforms (revenue spiked from ~$300/day to $600-1,000/day).

WHAT IT IS: A gamified habit/focus app — pick a character at onboarding, then leaderboards, XP, badges, levels, and a motivational screen keep users on task.

BACKGROUND: Obsessed with entrepreneurship since age 9 (built Roblox games instead of just playing). Tried and failed at dropshipping, reselling, clipping, vending machines. Brother Zach suggested apps. First app Problem Pal peaked ~$2,000/month (recently sold); Clear AI went nowhere; then a friend's struggle to stay on task sparked Locked — deliberately NOT another boring habit tracker, so he gamified it.

BUILD: ~2 weeks for Figma designs from scratch, then transferred to Xcode using YouTube tutorials + own knowledge + Claude Code. Idea to live in App Store: ~1.5 months. Stack: Figma (design), Claude Code ($200/mo), Superwall (paywall A/B tests, 1% of earnings), Supabase (database, free).

CORE STRATEGY — influencer marketing where CPM < RPM: His channels paid ~$2-3 RPM, so he closes creators at a CPM in the ~$1-1.50 range. Influencers already have audience trust, so their recommendation feels far more authentic than a traditional ad → stronger results. Why the Jeremiah video worked: (1) high engagement / high-quality comments = a great audience (most important factor); (2) the creator's content (staying "locked in") perfectly aligned with the app; (3) seamless, natural integration. Always require creators to show the app within the first 15 seconds.

PLAYBOOK — influencer marketing (start over, 2026):
1. Find creators in your niche — search your niche on Instagram/TikTok, open their accounts, DM every one the same message starting with "paid promo?"
2. Get them on a call.
3. Close them on a PROFITABLE deal — a CPM lower than your RPM.
4. Structure the deal — one of four options:
   - Flat rate: e.g., $500/reel or $1,200/4 reels (only for creators who consistently get views and will hit your target CPM without a clause).
   - CPM deal: $1-2 per 1,000 views, ALWAYS with a cap (e.g., cap $500 even if they get 10M views).
   - Minimum View Clause (his go-to): e.g., $500 with a 500,000-view minimum — keeps CPM under RPM.
   - Bonus deal: $500/video + an extra $500 if it hits 1M views.
5. Launch the partnership — send video requirements + a contract, give a 1-week deadline for the first video. If it performs, keep working with them.

ADVICE: Worry less about school, put more time into building. From a young age you're "sci-op'd" into one path (school → grades → college → stable job → happy); most people follow it without questioning. Seeing through that early is a huge advantage.

PRODUCER REFLECTION: The app is "stupidly simple" and matches a demographic Evan understands. Habit trackers are crowded but a "little secret" is iOS ASO (App Store Optimization) — ranking in the App Store. Young founders aren't overnight successes — Evan has been starting (and failing at) businesses for years. You no longer need permission — open a vibe-coding tool and build a business.

---

TITLE: My App Made $120K in 24 Hours
FOUNDER: Umberto — Flogga, a mobile app for yoga teachers/practitioners
DATE: 2026-03-29
URL: https://www.youtube.com/watch?v=DkmStHS8NP0

NUMBERS: Pre-launched May 2025 with a LIFETIME DEAL → ~$117,000 by end of launch day (~$120K in 24 hours), from 500-600 early lifetime customers. Now a subscription business (monthly/quarterly on website + yearly), ~4,000 active users (paid + free), ~$9-10K/month. Earlier physical-product brand (Play Pause Be, yoga card decks) did $200K+ in its first month on Kickstarter.

BACKGROUND: Not a developer (studied economics). Raised seed funding for a startup in 2012 that failed; left tech (ski instructor, fashion photographer); returned ~2016 as an advertising/growth strategist (learned to launch and position products). Built Flogga by transforming his physical yoga-card business into an app "without losing the mindful core." Found a developer a few months after sketching the concept.

THE LIFETIME-DEAL (LTD) LAUNCH STRATEGY: A lifetime deal = users pay once for lifetime access. Philosophy: MONETIZE AS EARLY AS YOU CAN — build the product and a revenue engine simultaneously. He identified the MINIMUM set of features needed to convince people to buy the LTD, then planned the whole launch machine (emails, landing page, videos, ad creatives) + did lead generation to reach new people. Recorded a YouTube walkthrough of every current feature, said "it works like this now, we'll build these other features, get it now lifetime with NO refunds, or wait a couple months for subscriptions." Early buyers are hugely valuable: they're invested in making the app work, give great suggestions, cheer you on; many later features came from their feedback.

THE EMAIL SEQUENCE (pre-launch lasted ~1 month + 1 week; he published it all on his blog):
- Email 1: storytelling, reveal nothing, create interest, lay the basis for what's coming.
- Email 2: more storytelling, reveal a bit more; create curiosity/confusion (put the physical product in back, something new in front).
- Later email: unveil what's "behind the red curtain" — show the app, briefly explain why, link to a video presentation.
- Build toward launch: explain the LTD is LIMITED in number AND time (reduces procrastination — works very effectively).
- NEVER show the price before launch day — otherwise people decide based on price; during warm-up they should evaluate only on features + long-term vision. Once they see price they can't unsee it.

PLAYBOOK TO START OVER (great launch):
1. VALIDATE before you build — talk to 5-10 people in your target market about the problem, but never tell them why you're asking (unbiased reaction). Read "The Mom Test."
2. Define your Minimum LAUNCHABLE Product — the minimum stage where it conveys enough value for early adopters to PAY; estimate build time and plan around that timeline.
3. Build your CONTENT MACHINE before promoting — a buffer of emails, graphics, videos, landing pages ready to go. Put yourself in the user's shoes (explain simply what's obvious to you; build trust + educate).
4. PRICING — don't throw out a number; structure it. Don't price too low out of fear (leaves serious money on the table). He used THREE tiers: ~$109 (limited features), ~$199 (more features), ~$349 (full future vision). The first two tiers create a reference price that helps sell the most expensive one and capture skeptical buyers.
5. LAUNCH MECHANICS — be completely transparent (show exactly what works, current limitations, the plan). Set a clear "no refunds" line (or the LTD is jeopardized); doubters can wait for the subscription. LIMIT time and spots — 5-7 days max — to force decisions over procrastination.

WHY LTD ISN'T "leaving money on the table": When early you have no data (no LTV, no churn) — an LTD converts assumptions into real money in the bank. Incentives: monthly subscribers have optionality (churn on a bug, leave a bad review, no feedback); lifetime buyers have COMMITMENT (report bugs, send detailed feedback — they even made a Telegram group of early adopters). People who hate subscriptions will pay 3-5x more for lifetime than a yearly plan. It's "raising capital from your customers without giving away equity, control, or board seats" — plus amazing feedback. (Pat: think of an LTD as a pricing strategy — price it at the ~24-month subscription value and collect the cash up front.)

TECH STACK: Flutter (dev), Firebase (~$25/mo), RevenueCat (subscriptions), Vimeo (video hosting), OneSignal (push notifications).

ADVICE: Stop waiting for perfect — "perfection is fear disguised as preparation." The breakthrough happens the moment you put something (even unfinished) in front of real people. Move sooner, ship earlier, trust the process — you learn faster in public than in private.

PRODUCER REFLECTION: Big/successful companies send tons of emails and run constant deals (Black Friday etc.) — this is marketing/sales, not spam; people can unsubscribe. Many very successful MRR founders STARTED with a lifetime deal.

---

TITLE: I Built a $100K/Month Android App
FOUNDER: Steve (+ co-founder) — Joinable, an AI calorie counter / nutrition assistant
DATE: 2026-03-25
URL: https://www.youtube.com/watch?v=0pp4X58q_0s

NUMBERS: Bootstrapped from <$1,000 to $100,000+/month over ~a year (built ~18 months ago). Last 28 days: $125,000 revenue, ~$80K MRR, just under $1M ARR, ~30,000 active subscribers (~40,000 total), nearly 1M downloads — ~80% of users AND revenue from ANDROID, ~20% iOS. Premium subscription (monthly + annual). Has spent ~$500,000 on Google Ads and made almost exactly that back in attributed revenue (~100% break-even, deliberately — bootstrapped, so campaigns must be profitable).

WHAT IT IS: A deliberately SIMPLE AI calorie/macro tracker — type or photo what you ate, it returns calories + macros per ingredient and a meal total; also logs exercise and weight over time. "Keep it simple, stupid" — less complexity than competitors is the core value prop and marketing message.

BACKGROUND: He and his co-founder both did major weight-loss journeys (Steve dropped 45kg/100lb by tracking calories religiously). Used many competitor apps, found the space too complex, built a best-in-class but far simpler solution.

CORE STRATEGY — bet on ANDROID + Google Ads (data-driven contrarian): Bootstrapped/capital-constrained, and iOS CPMs are ~4x Android's. The RevenueCat 2025 State of Subscription Apps report showed iOS users (4x more expensive to advertise to) only convert ~20% better than Android → Android is far more cost-effective. Validated on Product Hunt (front page → a couple hundred installs, 2 converted to subscribers), then ran Meta ads (could only afford Android) — Android converted as well as iOS, plus running Android ads gave spillover installs on iOS → doubled down on Android. Bread and butter = Google App campaigns (one place feeds all of Google's real estate: Play Store, Search, YouTube, Display, Discover). The #1 Play Store ad makes them ~#1 for keywords like "calorie counter/tracker."

ANDROID / GOOGLE ADS PLAYBOOK (start over, 2026):
1. Set up ATTRIBUTION & MEASUREMENT first — track in-app events (install, paywall hit, trial start, purchase + transaction value) and send them to Google Ads so it can optimize delivery.
2. Launch INSTALL campaigns to feed the algorithm data (it learns install cost / CPM per country, gives a baseline). Google App campaigns need 10 pieces of copy (5 headlines + 5 descriptions) + up to 20 images + 20 videos — if short on time, just flood it with STOCK images/videos and let the algorithm do the heavy lifting.
3. ASSET OPTIMIZATION phase (a function of time) — start low ($10-15/day) and ramp; replace stock with custom assets; take BIG SWINGS (wildly different media), not tiny tweaks (color/font). MOST IMPORTANT: update your PLAY STORE assets (screenshots, title, subtitle, description) since App campaigns pull from them.
4. Once assets are good, launch a TCPA (target cost-per-acquisition) campaign. Budget rule: you need ~10x your CPI/target-event cost per day (Google's algorithm needs ~10 target events/day to optimize) — e.g., a $15 trial → $150/day budget.
5. After a month or two you know your CAC → SCALE budgets per Google's best practices, and constantly OPTIMIZE the product (paywall, pricing, business model) so subscription conversion keeps climbing; raise budgets as conversion rises (flywheel).

THE ANDROID OPPORTUNITY: AI lowered the barrier → app explosion, but ~5x more new iOS apps vs ~2x more Android → saturation is on iOS. Opportunities on Android: (a) apps proven on iOS that have no good Android equivalent; (b) niche overlaps of problems no app currently solves. Find a very small problem in your own daily app usage, solve it, find others with the same problem. Also localize to other countries (huge worldwide base).

TECH STACK: Heavy Google ecosystem — Firebase + GA4 (backend/analytics), BigQuery, GCP, Google Play, Google Ads. RevenueCat (subscriptions), AI for backend. Ops tools: Claude Code + Claude Co-Work ($100/mo), OpenAI ($20/mo), GitHub Copilot ($39/mo), CodeRabbit ($30/mo), Fixer (AI email support, $30/mo), n8n (automation, $24/mo), AppFollow (ASO, $180/mo), Webflow (site, $18/mo).

ADVICE: Start CREATING CONTENT / documenting your journey early — after a decade living off social media he feels behind peers at content creation; it's a missing skill in the business.

PRODUCER REFLECTION: ~80% of your decisions should be based on YOUR OWN DATA (Google Ads, TikTok performance, conversion, usage) — analyze it (even feed it to AI for action items) and iterate constantly. Like WhatsApp building for every device, billions of Android devices = money to be made; you don't need the most optimized thing, just something that captures value.

---

TITLE: I Make $250K/Month From 13 Businesses (After Losing Everything to AI)
FOUNDER: Jackie Chow — portfolio of small internet businesses (SEO agency, B2B SaaS, etc.)
DATE: 2026-03-22
URL: https://www.youtube.com/watch?v=spiC5m6AJNs

NUMBERS: ~$250,000/month across 10+ businesses / 13 income streams. Breakdown: Indexsy (SEO agency) ~$85K/mo (~$500K last 12 months); Local Rank ~$50K/mo (~$454K since last March, hit $20K/mo right out of the gate); Advise ~$300K last 12 months; Trackings.ai ~$25-30K/mo; plus 7-8 smaller sources ($170-$5K/mo each). Started an SEO agency in 2015 (10+ years).

THE NEAR-DEATH EVENT: He'd built a portfolio of content sites (e.g., a foodie blog monetized via display ads + affiliate). Google's "Helpful Content" update + AI Overviews destroyed it — AI Overviews mean ZERO-CLICK: Google scrapes your data and presents recipes/answers directly, so users don't click through. "You were competing with Google." The agency in the background saved him.

CORE LESSON — DIVERSIFICATION is survival in the AI age: "Everyone tells you to focus on one thing — I'm living proof that's terrible advice." With new LLMs emerging daily, a single channel/business can be wiped out overnight. (Pat's nuance: he's arguably serving ONE customer in many different ways — the DNA of people with software portfolios — and AI now makes spinning up products easy, so "it's too hard technically" is over.)

THE INSURANCE POLICY — YouTube: The one platform that survived the AI crash. He'd been posting 2-3 years already; that audience saved him. His style is "stream of consciousness" (not fast-paced), which resonates at low view counts. KEY DATA POINT: 80% of Local Rank's $20K MRR launch came from YouTube — a video with only 1,800 views — while the launch tweet got ~30K views (15x the impressions) but only 20% of the revenue. Low views can convert far better than high impressions. His first-ever video got 30 views in 24 hours, but that was enough to keep going; daily uploads now get 1-2K views — "not amazing, but a very valuable audience."

YOUTUBE PLAYBOOK (start over):
1. Start in a NICHE you can completely own (e.g., local SEO / AI SEO, "SEO for plumbers", "marketing for lawyers"). Narrow is better → seen as a thought leader.
2. Commit to DAILY uploads for ~6 months (one long-form + one short-form/day). Daily forces you to lower standards and ship — "you'll learn way more from 30 daily bad videos than 2 perfect ones." Build it into your routine until it feels weird NOT to.
3. Provide SOLUTIONS to problems your audience already has (which are usually problems you have too). E.g., a video "How do I rank on ChatGPT?" that just shows you exploring it does great — you don't even have to fully answer; CTA is a link to your product.
4. HOOK within the first 5 seconds — don't open with "Hey guys, scoop of creatine"; open with "Here's how I ranked in ChatGPT in 24 hours."
5. Optimize for TRENDS & SEARCH — being first to talk about a new LLM/tool lets you rank, especially when starting out.
6. Build a SIMPLE FUNNEL — every video links to a newsletter/lead magnet (show notes + helpful docs); collect email, provide value first, pitch later (don't ask for the sale early in the video).
7. Make YouTube part of your ROUTINE — daily for 2.5 years; uncomfortable when he doesn't.

ADVICE: Don't listen to people screaming at you to focus on one project. Revenue diversification is, in 2026, the only reason he's still standing.

PRODUCER REFLECTION: You don't need a lot of views to dominate a small space — a captive audience of 500-2,000 daily viewers is enough to build a $250K/month business. You must be willing to put your face out there and post crappy videos every day.

---

TITLE: I Make $17K/Month With One Strategy
FOUNDER: Ben — Follow Buddy, a SaaS to safely find who unfollowed you on Instagram
DATE: 2026-03-19
URL: https://www.youtube.com/watch?v=4KfFB-dh71Y

NUMBERS: ~$17-20K/month, 82,000 users, 3,128 paying users, $0 spent on ads (all organic, predominantly SEARCH across YouTube/TikTok/Instagram). Subscription (weekly/monthly/yearly; pushes yearly at $50/yr) with a free trial. RevenueCat: ~484 on trial, ~2,752 active subscriptions. The branded YouTube channel does ~40,000 (mostly search-based) views/28 days.

WHAT IT IS: Follow Buddy safely finds who unfollowed you on Instagram by using Instagram's APPROVED "export data" feature (upload your followers/following file → it compares to your previous audit) — NOT violating Instagram's TOS like the apps that get users banned. Built with React, SendGrid (email), MongoDB (DB), AWS (cloud), RevenueCat (payments ~1%), Keywords Everywhere (keyword research).

BACKGROUND: Ran a marketing agency for 7 years (started in college). Learned that "offer everything to everyone" is a horrible model; software companies were most open to working with a young founder. Discovered YouTube became multiple SaaS companies' highest-converting/highest-grossing revenue source — has rinsed and repeated that exact strategy for 7 years.

IDEA ORIGIN: While growing his agency he made content about growing on Instagram; people kept asking him (as their de-facto "Instagram support") about who unfollowed them, and many got BANNED using TOS-violating unfollower apps. He found a safe method, made a video that got ~1M+ views (now called the "compare lists method"); accidentally sent ~1M people to someone else's list-sorting tool. Chewed on building it for 4 years, checking Upwork dev quotes yearly until the price dropped enough ~2 years ago.

CORE STRATEGY — YouTube SEARCH (high-intent, low-competition): Search traffic is HIGH-INTENT — you don't have to convince people; they've convinced themselves and just want a solution. Every business should do this; even niche searches exist, and if there's no content, YouTube ranks "the next best thing" — so even a bad video can rank #1 with low competition. Example: a 20-minute-to-make video "best Instagram unfollower tracker apps" (25K views in 7 months, growing every 48h) ranks #1 for many buyer keywords and lets him educate viewers on why his app is safer (boosting conversion).

THE YOUTUBE-SEARCH PLAYBOOK (start over, 2026):
1. RESEARCH via the AWARENESS LADDER — map your customer's journey: aware of the need → aware of some solutions → aware of specific solutions → aware of benefits → convinced/ready to buy. Use ChatGPT to brainstorm the questions a buyer asks at each step AND how they actually phrase them. Use VidIQ / Keywords Everywhere to check monthly YouTube search volume. Prioritize videos by intent (likelihood to buy) × search volume. Pick 10-20 keywords; check what currently ranks — if there's NO relevant content, make that video ASAP (you'll likely rank #1 even if it's bad); if there's competition, beat it (e.g., a rambling 12-min video → make a tight 4-min one for better watch data).
2. RECORD the content — packaging (title/thumbnail) for search only needs to CONFIRM they're in the right place: front-load the primary keyword but write for a human ("talk to the computer AND the human at the same time"). On film: confirm the click immediately (repeat the search), get right into it, be honest/over-deliver, show pros AND cons (mentioning a con improves conversion); if not a purchase-ready video, send them to the next step in the awareness ladder as the CTA.
3. PACKAGE & OPTIMIZE — keyword-optimized title; description repeats multiple relevant keywords (written for humans — the first two sentences show in search, so don't waste them on just an app link); add highly relevant TAGS saying the target term every way it can be said (more specificity → YouTube believes you understand the problem → ranks you).
4. MONITOR & STACK BRICKS — keep remaking variations of target-keyword videos until you rank. Unlike Google, YouTube lets you hold MULTIPLE high-ranking listings (do it across multiple channels) so you're the face for every variation of the problem. "This process requires almost no creativity — anyone can do it."

ON "it's easy for you, you have an audience": "That's stupid" — he grew his whole channel doing exactly this; he only has those things because he did what he's telling you. It's a limiting belief; there's far less competition than you realize.

ADVICE (non-technical founders): Partner with the BEST people possible and give them skin in the game (for him: full-time employment for his developer; could be a revenue split). With AI, the gap between an "okay" and a "great" collaborator is growing daily — do anything to work with someone awesome even if you take home less; the value difference is 100% worth it (he wasted ~a year + money learning this). Overall: don't overcomplicate it — if you have even the slightest idea, move and validate ASAP; you don't need to be creative, just show up where people already are searching.

PRODUCER REFLECTION: YouTube SEARCH is hugely underrated and low-competition because people would rather have AI generate an SEO article (which won't work anymore) than make a video. A stupid video can rank #1 for years and drive real revenue. As everything AI-ifies, many people still want to hear from a real person — good for YouTube's longevity.

---

TITLE: I Make $60K/Month From the Most Boring SaaS on the Internet
FOUNDER: Thomas (Tom) — Packager, a tool to deploy apps to Microsoft Intune in one click
DATE: 2026-03-15
URL: https://www.youtube.com/watch?v=LRX8TWC2hTM

NUMBERS: ~$60,000/month, 100% bootstrapped, thousands of paying customers, growing $447K → $910K (year over year). $25/month subscription. Likely very low churn (IT admins inside companies).

WHAT IT IS: A browser-based tool that lets IT admins deploy applications to Microsoft Intune with one click (select an app from a catalog like 7-Zip → deploy → it packages and uploads into the Microsoft tenant). Boring, no fancy design, but extremely useful.

IDEA / VALIDATION: While working with Intune, Thomas found packaging one app could take ~an hour. Forums showed many IT admins had the SAME problem; existing solutions were too technical or too expensive. He saw a niche for an affordable, modern, browser-based tool that does ONE simple job: deploy applications. (Built before Cursor/Claude Code existed — much of it hand-written.)

DISTRIBUTION / GROWTH: Launched the MVP for FREE on Reddit (best place for this audience) → quick traction, great feedback, and some harsh/rude comments (you have to accept that some people won't like what you built). After fixing early bugs and stabilizing, introduced a $25/month fee → first paying customers. Most effective ongoing strategy: PARTNER with people who specialize in the product — for him, Microsoft MVPs who create demos for a highly targeted audience. He loves "planting seeds": a YouTube video someone stumbles on 2 years later can become a customer → huge ROI.

PLAYBOOK TO START OVER (find a low-competition niche SaaS, 2026):
1. Build in an area where you already have CREDIBILITY — he was "living and breathing" Microsoft Intune; customers can tell you love what you do.
2. Look for PAIN POINTS instead of ideas — if people around you (e.g., at work) complain about something, see if you can build a product they'll buy to fix it.
3. AVOID competing with the masses — while everyone fights over huge markets, target smaller audiences who want something different. Competitors chased customers with millions of devices; he targeted SMALL businesses — plenty of them, enough for a full-time business.
4. CHARGE EARLY even if the price is low — he charged during beta, which validated willingness to pay. No point chasing an idea no one will pay for.
5. Optimize for FREEDOM, not scale-at-all-costs — small team, low costs → the income is theirs, work from home, work-life balance, a life he's happy with.

TECH STACK: Bubble.io (frontend), GitHub Actions (package build/testing + code hosting), Microsoft Azure (serverless functions), monday.com (dev tracking/tickets), Microsoft 365 licensing per staff member.

ADVICE: Just START. With low-code + ChatGPT, building has never been more accessible — but that means someone else could build your idea while you're still planning. Speed is key: launch early, share with your target audience, listen closely to feedback, and enter a continuous improvement cycle.

PRODUCER REFLECTION: If it's boring and "doesn't make sense" socially, that might be the direction to go — low churn, real business. Think about the times you sat in a 9-5 wishing a task was easier — that's the idea.

---

TITLE: How This $250K/Month SaaS Got Its First 100 Users (Steal This Playbook)
FOUNDER: Joseph — Super Demo, an AI demo-automation tool (interactive product demos)
DATE: 2026-03-11
URL: https://www.youtube.com/watch?v=l4WEqPX52Cg

NUMBERS: ~$250K+ MRR, just over $3M ARR, 150,000+ users in ~2.5 years; G2's #5 fastest-growing product of 2025. Has scaled two separate products past $3M ARR. Product-led growth (most traffic from starter/premium tier).

WHAT IT IS: Super Demo creates interactive demos — guided, clickable, realistic clones of your product embeddable anywhere (website, docs) so prospects experience your "aha moment" without signing up or talking to sales. Build a demo via Chrome extension (click through your workflow → it clones the front end into an editable, PowerPoint-like editor); add chapters, voiceovers (clone your voice), or a Loom-style face cam.

BACKGROUND: Builder since 14-15 (Craigslist electronics, soy candles, clothing, a digital agency, a venture-funded B2B seafood marketplace). The recurring problem across all of them: it's hard to demonstrate a product's value (Looms go out of date, don't get watched). Kept the idea in his back pocket; built it after leaving his last company.

VALIDATION: Knew it was HIS problem; then asked "do others face it and what's their workaround?" Talked to 100+ B2B SaaS founders — the unifying concern: people HATE making product demos and hate the sound of their own voice → "there's something here," so he built a v1 experiment to see if people would pay.

PLAYBOOK — getting your FIRST 100 CUSTOMERS:
1. LOW-HANGING FRUIT — capture obvious, existing demand from people already searching. Build valuable content across the FULL funnel:
   - Bottom of funnel: detailed COMPARISON pages "Super Demo vs [every competitor you can find]" to piggyback their traffic; ship imperfect live v1.0 pages to get ranked/cited in LLMs early; see which competitor pages get traction/citations and optimize those.
   - Mid funnel: dozens of FREE TOOLS in adjacent spaces (screenshots, SOPs). Their twist: make the product experience UNGATED (no signup/trial) so visitors find value instantly. Today free tools = ~20% of all traffic and convert ~15-20% of visitors to signups.
   - Top of funnel: programmatic SEO pages with interactive Super Demos embedded for thousands of workflows/keywords ("how to export Figma to PDF", "how to merge cells in Excel") — solving the question interactively with the product front and center.
2. DO THINGS THAT DON'T SCALE to remove buyer friction — he personally offered to create free Super Demos for founders on Reddit/Indie Hackers: they post their product URL, he builds the demo and comments it inline so they can sign up, duplicate, and use it. Bonus: others watching the thread see the demos and want their own. ("Hand-to-hand combat" — do it 100 times and a percentage convert.)
3. BE EVERYWHERE your users are — there's no magic channel in 2026; aim for "distribution density": SEO + AI/LLMs via content, living in communities, direct outreach via product updates, building in public on LinkedIn/Indie Hackers, being a megaphone where founders pay attention. Traffic mix: ~30-40% SEO/LLMs, ~30% word of mouth / watermarks / referrals / viral loop (people share Super Demos), ~20% building in public on LinkedIn.

WHAT EARLY SaaS FOUNDERS GET WRONG: Not launching yesterday and chasing perfection. Launch earlier → results compound faster and you learn whether to kill, scale (with data), or pivot. A founder's only advantage over an incumbent is URGENCY and SPEED. (Caveat: in the AI-first era products still need real craftsmanship.)

TECH STACK: rotates through 50+ tools/month — Super Demo (own product for demos/onboarding/training), Claude Code + Cursor + Codex (switch by best model), Linear (tasks, connects to Slack + Claude), AWS (hosting), Postmark (transactional email), Intercom (workflows/onboarding/marketing/support), plus Ahrefs, Clay, Zapier for GTM/CS.

ADVICE: Stop obsessing over competition and the idea — just start building. If you identify the right problem, the market is big enough for everyone; most companies die by suicide/internal combustion, not competition.

---

TITLE: I Built a $10K/Month SaaS Using Other People's Customers
FOUNDER: Ivan (Macedonia) — Lancer, an AI agent that automates Upwork job discovery/qualifying/bidding
DATE: 2026-03-08
URL: https://www.youtube.com/watch?v=LKARRA0MvY4

NUMBERS: Hit $10,000 MRR in the 3rd-4th month after launching, with ZERO paid ads. Premium SaaS subscription, three plans: Pay-as-you-go $79 (30 proposals, $2/extra), Light $300 (250 proposals, $1.50/extra), Unlimited $500/month (launch offer). Most growth came from just TWO Upwork coaches.

WHAT IT IS: Lancer is an AI agent that turns Upwork into an automated client-acquisition channel for freelancers/agencies (5-6 figures/month for them, saves 10+ hours/week). It uses LLMs for two jobs: job qualification + proposal writing.

BACKGROUND / IDEA: Ivan ran a 7-figure software dev agency (~20 employees) for 5 years; their main client-acquisition channel was Upwork (~200,000 jobs/month posted across 24 hours; ~10 min to qualify + write a personalized proposal). Perfect case where an AI agent outperforms a human ~10x+. Built it as an internal tool (over a weekend), it crushed; a beta test with friend agency-owners closed three 5-figure clients in two weeks → launched as standalone product.

THE OPPORTUNITY — AI agents on top of platforms: Automating workflow parts that live on top of existing software platforms (a "software niche") is very powerful, and it's EASIER to reach customers because users already live on the platform (on Upwork the ICP is public). Any platform with a huge user base is something you can automate and build on top of (Fiverr, LinkedIn, Poshmark, Pinterest, Photoshop...).

CORE GROWTH STRATEGY — "CONNECTORS" (affiliates one layer above your ICP): Instead of paying ads / cold-emailing the ICP directly, identify the LAYER ABOVE them — a profile of user who already has access to them — and convince them to be affiliates. Selling one connector becomes a single "high-ticket sales call" instead of hundreds of calls for a $200/mo SaaS. The right connector: (1) has a network full of your ICP, (2) has great reputation + commands trust within that network, (3) bonus: is good at sales. For Lancer, connectors = Upwork COACHES (each has 5-20 new paying customers/month paying $600-1,000+ for lead help; great Upwork profiles with lots of inbound → easy to upsell Lancer). How he landed them: coach #1 came via a beta user's intro — he just demoed it and the coach started referring every client; coach #2 via cold LinkedIn outreach — he straight-up offered $1,000 to jump on a call (paid him to be a user). Commissions: 30% lifetime if they fully onboard/set up the client, 20% if they just refer.

PLAYBOOK TO START OVER (SaaS / AI agent, connector growth):
1. Define your ICP — who has the problem AND is willing/ready to pay; for SaaS, ideally onboards easily (low friction, self-onboards) and doesn't churn. (You can't really know your ICP until you have paying users — theirs turned out to be agencies, not freelancers.)
2. Go a level ABOVE — find the type of user who has a wide network of your ICP and commands their trust/respect (Upwork coaches).
3. Write a very PERSONALIZED pitch/offer to connectors — do real research, reference their work, even a long Loom video. (You'd never do this to close one random subscriber, but for an affiliate it's worth it.)
4. Work out the details — standard is 20-30% lifetime commission; adjust for network size / social following / existing competitor deals; sometimes pay up front (case-by-case based on their value).
5. Track affiliates and do monthly payouts — once you close a connector you get inbound Stripe sales / booked calls; he uses Tolt (affiliate marketing software) to track and automate payouts.

TECH STACK: TypeScript (front + back: Next.js + Node.js), but now coding mostly via Cursor with Opus 4.5; OpenRouter (LLM APIs); hosting on Hetzner + GCP (+ Firestore); proxy providers (safe Upwork connection); Elasticsearch (querying jobs/data); Tolt (affiliates).

ADVICE: Start building software products NOW. He delayed jumping into "the arena" to optimize for income/security (a highly profitable dev agency with a hard ceiling). The problems you solve building/growing a software product today are so highly leveraged and broadly applicable that mastering them is worth more than a year or two of even six-figure income. We're early in the AI revolution — decades of opportunity ahead.

PRODUCER REFLECTION: A great example of an AI agent that actually makes money — automating boring, repetitive work on platforms (Upwork, Fiverr, LinkedIn, Photoshop...) wasn't possible a couple years ago.

---

TITLE: Zero to $40K/Month With One Marketing Channel (No Social Media)
FOUNDER: Mickey (Spain) — Late, a social media API for developers/brands
DATE: 2026-03-04
URL: https://www.youtube.com/watch?v=E_rX4JJrYkY

NUMBERS: $0 → $40K MRR in ~7 months via Google search. ~50K total signups since launch, 700+ paying users, churn <10%. Profitable. Of revenue: ~$8K MRR from organic SEO + ~$15K MRR from paid Google search (spends ~$8,000/mo on Google Ads at ~$2.5 revenue per $1 spent).

WHAT IT IS: Late wraps the official social APIs (Facebook, Instagram, Twitter/X, LinkedIn) — they pay for the highest plans and handle all platform permissions — and hands you a single developer-friendly API with everything, no limits. Pricing by connected accounts (Build / Accelerate / Unlimited tiers). The differentiator vs. competitors: simple, affordable, API-first, and great DOCUMENTATION (essential for developers).

BACKGROUND: 5+ years with startups (founded "Academy" in Spain, raised VC, now 100+ employees). Spotted a gap: no simple, affordable social-media-automation API with good docs. Decided to focus entirely on DISTRIBUTION (build is not the point) via proven channels: SEO + paid ads.

CORE STRATEGY — capture EXISTING high-intent demand (not create it): Social media is noisy/oversaturated and organic reach is dead, but people actively SEARCH "social media scheduling API" / "Twitter automation tool" with 10x higher buy intent. Focus 100% on high-intent channels (SEO + Google search ads) — predictable unit economics, not dependent on luck/trends. The SAME useful content serves both: if a page ranks organically, great; if not, run ads on it. Use data from both to optimize landing pages/messaging; reinvest all revenue into scaling what works.

ORGANIC SIDE: Target very bottom-of-funnel keywords — use Ahrefs to find 300-800 monthly-search, low-competition, very high-intent terms ("social media API", "scheduling API for Twitter"). Write in-depth guides answering intent ("how to schedule Instagram posts automatically"). Maintain clean site structure, fast load, mobile optimization, proper metadata. Do link building (tools + manual paid outreach). Track rankings with Ahrefs + Google Search Console, constantly optimize CTR. (→ ~$8K MRR organic.)

PAID SIDE (the guaranteed revenue engine): Bid on the same high-intent commercial keywords; create a CUSTOM landing page per ad group tailored to the keyword/intent ("Instagram API" → an Instagram-specific page). Automate with Google Ads automated bidding at a target CPA of $120 (their average acquisition threshold). Ad copy focuses on VALUE not features ("scale 30 days of social media in 1 hour"). Continuous A/B testing of headlines, descriptions, landing pages (tracked in PostHog). (→ ~$15K MRR.)

GOOGLE PLAYBOOK TO START OVER (SaaS, 2026):
1. Find your CORE high-intent keywords very close to your value prop (Ahrefs/SEMrush, but many are obvious like "social media API"). Spreadsheet them with volume + difficulty; focus only on these and aim to rank within 3-6 months.
2. Create high-quality CONTENT for those keywords (blog, landing page, or free tool) with a big CTA to your signup page; add internal linking. Push ~10-15 high-quality articles in the first week for momentum (don't overproduce — Google prefers quality).
3. Launch ADS using that data/content — set up Google Ads, ad groups around the same keywords, 3-5 copy variations focused on value propositions.
4. OPTIMIZE & SCALE on data — identify which keywords bring new customers, double down on high-ROI keywords, pause poor performers, test headlines/copy/CTAs, increase budget month over month while ROAS holds.
5. TRACK & improve CAC — dashboard (Sheets/Data Studio) for CAC, ROAS, revenue, traffic per channel. Good CAC = 20-40% of LTV; keep CAC under 30% of first-year revenue. Every month A/B test new keywords/copy/landing pages based on last month.

TECH STACK: Claude Code (faster coding), DataFast (track what brings revenue), Google Ads (~$8K/mo), Ahrefs (~$200/mo for organic insights/monitoring), PostHog (A/B testing).

ADVICE: Stop trying to be everything to everyone. Picking ONE growth channel and getting really good at it (for him, paid search) is 100x better than being mediocre at 10 channels. Pick your single best growth lever, get obsessed, measure relentlessly.

PRODUCER NOTE: Google search isn't dead — INFORMATIONAL queries are dying to AI ("how to write a good post" → ChatGPT), but INTENT-based commercial queries ("social media scheduler", "I need insurance") still convert and click through to buy. Google is a great first channel for people who don't want to be on camera (the "spreadsheet/finance type").

---

TITLE: I Make $15K/Month From One Website
FOUNDER: Maddox Schmidtoffer — DuckMath (duckmath.org), an unblocked-games website
DATE: 2026-03-01
URL: https://www.youtube.com/watch?v=qIlX7cQ2UdU

NUMBERS: A simple unblocked-games website making ~$15,000/month. Launched 4 years ago; in the last ~4 months went from ~5,000 to 150,000 daily active users and ~$1,000/mo → ~$15,000/mo. ~1.5M users/month, ~$0.01 per user via Google AdSense. SOLD the business for $120,000 (a few weeks before the interview), built from his dorm room. Main TikTok account: 4.6M views.

WHAT IT IS: A website where (mostly school) users play "unblocked" browser games — click a game, play it. Monetized via Google AdSense (paid per ad view); the goal is to maximize time on site AND pages-per-visit (more pages = more ads = more money).

ORIGIN / "FOLLOW THE MONEY": Saw a kid younger than him on TikTok promoting his own unblocked-games site → "I can do that." Built a crappy version in 1-2 weeks, marketed daily on TikTok (5 days/week) for ~2 years with little result. Then one day DuckMath passively made $240 in a day (pure luck/best day) → realized it had been quietly earning while he did nothing → decided to actually market it. (Lesson Pat draws: people abandon a silly-but-earning project to chase "serious" B2B — but going all-in on the thing that already makes money is what works.)

BUILD (incremental): First version on Google Sites (drag-and-drop, embedded games) — looked terrible but worked. After a few thousand users + learning React in an internship, rebuilt the whole site in React; once vibe coding got big he barely touches code, freeing him to focus on MARKETING. Never a good designer — just copied what others did (simple design). Later got into A/B testing to maximize time-on-site and pages-per-visit (more ad views).

GROWTH STRATEGY — pure VOLUME of short-form video: Made 3 TikTok accounts, posted 3x/day, 5 days/week, cross-posted to Instagram Reels, YouTube Shorts, and Snapchat (don't sleep on Snapchat — consistently 20K+ views). Iterate every single video: check yesterday's engagement, ask "how can I make them better?", then immediately make 3 new ones. Researched and initially COPIED competitors' best videos, then "worked two times harder" (more volume, same quality) — competitors posted once a day/week, he posted far more. Later he MENTORED someone else to make the videos in his format to save his time. Top video: 2.1M views on TikTok + 3.2M on Instagram (same video, auto-cross-posted) = ~5M total, ~30 min to make, "pretty crappy" phone footage with a strong visual HOOK then "go to this exact link" — likely ~$1,000 from that one video. Found a working format and kept pumping it out (e.g., part 30 of a series) testing different hooks.

PLAYBOOK FOR 2026:
1. Pick a NICHE YOU KNOW HOW TO MARKET IN (he knows games/college students → e.g., an AI college-study tool or game-server-hosting platform).
2. Build a super-quick MVP in 2-3 days with AI.
3. Research 10-20 of your competitors' best-performing videos; find what's common (hook, CTA), understand why they went viral, write down how to copy/use their format.
4. Post DAILY on TikTok; make mistakes but keep getting better ("your first video won't be great, your 100th sure will be"); iterate; if it starts taking off, go ALL IN.

THE SALE: A year earlier he'd seen a bigger company buy a smaller game site like his, so he contacted them, shared his stats, got lowballed at $100K, countered, agreed, and used Escrow.com as the middleman. Slightly regrets selling (nothing new working yet) but on reflection it was the right move. Now building MaddoxCloud (cloud gaming for phone games).

TECH STACK: Cloudflare (hosting, domains ~$200/mo, static data — otherwise free), Supabase (backend/auth/leaderboards/coins/user data, $20), PostHog (analytics + A/B testing; got $50K in startup-program credits), Google AdSense (auto-serves ads, no code/contact needed), Repurpose.io (auto cross-post TikToks to YouTube/Instagram/Snapchat), a Discord (~7,000 members) for community/feature hype, and paid his girlfriend ~$200/week to post videos.

ADVICE: Stay CONSISTENT — this only happened because he never stopped posting daily / forgot about the site over four years and kept incrementally improving. "If all else fails, stay consistent with your project — but know when to drop it."

PRODUCER REFLECTION — "ego business vs. the business you're meant to build": The ego business is what others congratulate you for ("a real business" — B2B/SaaS); the real business is the one that's "not serious but makes money." If it's making money, go that direction. Decide whether you're building for CUSTOMERS or for what non-customers think of you. (Games/websites are some of the biggest businesses in the world.)

---

TITLE: I Built a Niche App to $9K MRR (open-source dev tool)
FOUNDER: Jonathan Fishner — ChartDB / Chartbrew, open-source database visualization for developers
DATE: 2026-02-25
URL: https://www.youtube.com/watch?v=7vz6b_Ohdl0

NUMBERS: ~$9,000-9,400 MRR, launched open-source 16 months ago, 21,000+ GitHub stars, ~250,000 developers used the product in a year. Open-source self-hosted is free; the paid CLOUD (hosted) version is how they monetize — devs find it via GitHub, use it free, then upgrade for streamlined workflow/team collaboration.

WHAT IT IS: Point it at your database and it turns the schema into a visual, interactive ERD/chart (run one "smart query" in your DB client, paste the JSON, click import → see all tables and relationships). No signup, no install of their software, no credentials needed.

IDEA / PIVOT: Originally tried to build an AI-infused database client — failed, because it required credentials/access + installing software, and engineers wouldn't trust an unknown tool. Pivoted to ChartDB ("take your database and make it a chart, simple as that"). Two things made it work: (1) it's visual — instant "wow"/value; (2) drastically reduced friction (no access, no install).

GROWTH: Launched as a "Show HN" on Hacker News after ~3 weeks of development → hit the front page → thousands of engineers landed the same day. Why the HN launch worked: developers love open-source (test it with no signup), and if you offer something genuinely UNIQUE (a sharp "wedge"), they reward it with upvotes that carry you to the homepage (where tons of devs check launches daily).

PLAYBOOK TO START OVER (developer tool, 2026):
1. BE the user / build for yourself — you see the value immediately and understand it (for ChartDB: "I want an interactive, good-looking ERD").
2. Design for the persona's CONSTRAINTS, not the ideal — developers prefer self-hosted tools they can test locally with no signup wall; reduce friction (ChartDB has no signup, no sales calls, no credentials).
3. Start with a WEDGE, not the full vision — ship something people appreciate and get value from instantly, then evolve via feedback in small iterations.
4. Let USAGE tell you what to monetize — they didn't monetize at first; when users asked to work with their team, they built real-time collaboration (complex to support) and monetized that. Monetization should be a response to behavior, not a guess — watch how usage patterns merge.
5. Market where your ICP already LIVES — don't invent channels; show up where developers are: GitHub, Hacker News, Reddit (self-hosted + dev subreddits), internal team sharing.
TAKEAWAY: Pick the persona, aggressively remove all friction, and be obsessed with ONE core value until adoption feels effortless.

TECH STACK: React + Vite + Node.js + Tailwind + React Flow (canvas/entities); built with Claude Code (Max $200/mo); Tribe/compliance tool (SOC 2 for big clients, $500/mo); ChatGPT + API for AI assistant (~$70); Resend (transactional email); AWS (~$600/mo); ChartMogul (free); Better Analytics ($25/mo); Framer ($30/mo marketing site); Stripe; Crisp (user chat); Ahrefs (SEO).

ADVICE: Pick one core value and defend it aggressively. Everything worked when they focused entirely on making database visualization obvious and ignored everything else.

PRODUCER REFLECTION: Developer tools are huge because they're free to download/try (e.g., a "Claude bot" getting hundreds of thousands of GitHub stars in a week). Build in spaces you know — Jonathan could predict what developers would complain about. The earlier failed AI-DB-wrapper wasn't wasted — building it was necessary to reach the pivot.

---

TITLE: I sold my company
FOUNDER: Pat Walls — founder of Starter Story (the channel itself), sold to HubSpot
DATE: 2026-02-23
URL: https://www.youtube.com/watch?v=v-uhjlMg9L0
NOTE: This is a personal narrative/founder-journey episode (not a guest interview), but it carries real lessons on consistency, compounding, building a sellable business, and the emotional reality of an exit.

THE STORY: ~10 years ago Pat moved to NYC for a six-figure, stable developer job at a small startup — but wasn't happy because he wasn't building something that was his. For ~a year he did 2 hours of DEEP WORK every morning at a Starbucks before work (writing, coding, sending emails, interviewing founders), refreshing Stripe as it crawled from $0 to a couple hundred dollars. Eventually he worked up the courage to quit and go all in with ~$12,000 to his name.

KEY LESSONS:
- CONSISTENCY + COMPOUNDING over a lucky break: "It never exploded overnight. It just accumulated." Most months nothing moved; some months everything broke; but he kept shipping daily — posting content, interviewing, coding, refreshing Stripe — and slowly people noticed and revenue ticked up. "Your life can change in just a few short years... not because of one big lucky break, but because you believed in yourself over a long enough number of days, months, and years for that to compound."
- First hire was his sister — that's when it started feeling like a real company (then more hires, more money, more responsibility).
- BUILD SOMETHING BIGGER THAN YOURSELF: The goal was never just money — it was to build something real that didn't depend entirely on him. Starter Story stopped being about him years ago (it's about the team, the process, the thousands of founders interviewed, the millions inspired).
- The "freedom" he built turned into a "cage" — the business became his entire identity ("the Starter Story guy") and consumed him. He'd publicly said he'd never sell and meant it, but when the offer came he asked himself: "Am I still building, or just holding on?" Realized that if he wanted it to grow beyond him, he had to let it go.
- THE EXIT: Sold to HubSpot (a public company). What mattered in the deal was less the numbers and more ALIGNMENT — same team, same mission, same obsession with telling founder stories, but with more resources (bigger interviews, more shows, better production, more tools). Amount undisclosed but "life-changing." Selling "didn't feel like winning... it just feels like closing a chapter."

ADVICE/THEME: Show up and do the deep work consistently; build a business with a mission and team that can outlast you (which also makes it sellable); be honest with yourself about why you're holding on. (He offered a follow-up on how the deal happened, how to build a sellable business, and negotiation lessons.)

---

TITLE: How I Built a $12K/Month Micro-SaaS
FOUNDER: Vikash (India) — Bulk Mockup, a Photoshop plugin
DATE: 2026-02-11
URL: https://www.youtube.com/watch?v=W48emwbUlUE

NUMBERS: ~$12,000-13,000/month (consistent, via Gumroad). 100+ five-star reviews (mostly praising support). Subscription $15/month.

WHAT IT IS: A Photoshop plugin that turns the manual mockup-creation process (30-60 min) into ~2 minutes — point it at template + design folders and it batch-generates mockups (e.g., 50 mockups in ~1 minute; 1,800 mockups in under 30 min). Customers find it via YouTube and pay monthly.

ORIGIN: Freelanced Photoshop jobs on Upwork/Freelancer.com. A client wanted to automate part of Photoshop; instead of skipping, Vikash learned JavaScript in one day on Stack Overflow and hacked a Photoshop script. It became his internal tool. On a 1,800-mockup print-on-demand gig (client expected 3-4 days), he finished in under 30 minutes; the stunned client wired $300 for the tool without a second thought → Bulk Mockup was born. (Upwork/Fiverr are full of business ideas hiding in plain sight.)

BUILD: Started as a hacky one-time-fee script (not defensible). Locked himself in his room for 2 months to turn it into a (bad-UX but working) product. Couldn't do license validation/user management, so sold it as a LIFETIME deal for a couple years; once he had funds, hired an Upwork developer to polish it into today's product.

CORE STRATEGY — the "CONTENT FLYWHEEL" fueled by CUSTOMER PAIN: Discover customer pain → create content around it → content attracts new customers → they reveal new problems → feeds back into new content. He makes YouTube videos that solve LONG-TAIL customer problems. They don't get many views but solve a real pain → viewer finds the solution, trusts him, buys. "You do not need a viral video — a simple video that solves a customer pain is what you need." Examples: a 370-view video (4 months) → 3 customers = $345 MRR; a 12,000-view video (6 months) → $213. Every video is a compounding ASSET on YouTube + Google. Production is bare-bones: don't care about intros/setup — just record the solution; speak to their problem directly (don't frame it as a "viral YouTube video").

THREE-STEP PLAYBOOK:
1. COLLECT customer pain (don't brainstorm — harvest) from 4 touchpoints: (a) lurk in communities where customers hang out, list repeated pains, start convos for context, never sell; (b) ONBOARDING emails offering a custom tutorial (customers submit great long-tail tutorial ideas); (c) CUSTOMER SUPPORT as an education channel — ask for their file, record a custom Loom/tutorial, sometimes hop on a call and solve it live; over 3 years they have 1,500+ recorded videos (a goldmine of real problems/edge cases that never show up in keyword research); (d) YOUTUBE COMMENTS — find niche videos with low views but HIGH comments (signals unresolved pain), list the objections, make better content answering them.
2. CREATE content — easy because the pains come from real conversations (you already know the customer and problem).
3. DISTRIBUTION — before publishing, find an SEO angle and optimize the video for Google search/ranking. Little-known hack: a YouTube video optimized for the same search intent will RANK ON GOOGLE — 22% of their YouTube views come from Google search. On-page SEO is simple: put the keyword in the title, description, and first 30 seconds of the transcript.

TECH STACK: Komodo (Loom alternative, $19 AppSumo lifetime — tutorials), Boldesk (support tickets, ~$15/mo), Sanja (showcase reviews), Zoom (support calls, ~$20), Adobe ($40/mo), Boromi (screen recorder for tutorials), Notion ($12/mo, content system), Cal.com (free scheduling).

ADVICE: (1) Don't ignore your health — 14-16 hour grinding led to spine surgery. (2) Be OBSESSED with your customer's problem — listen, and create the solution (a product, a video, anything).

PRODUCER REFLECTION: Talking to customers is a multi-million-dollar goldmine of ideas/marketing/content — you're crazy not to. A good business idea makes people money, saves them money, or saves them time (this saves time). Build "pointy feature" / micro-SaaS that does ONE thing very specifically rather than boiling the ocean.

---

TITLE: I Make $150K/Month From 20 Tiny Apps
FOUNDER: Katie Keith — Barn2, a portfolio of 19 WordPress plugins (+1 Shopify app)
DATE: 2026-02-08
URL: https://www.youtube.com/watch?v=9sJ2R0rM3CA

NUMBERS: ~$1.8M/year (~$1.7M from plugins + affiliate income + dev services); avg ~$150,000/month across all plugins (higher in November, lower in December). $9.8M in lifetime plugin sales. Plugins on 90,000+ sites; 17,000 active paid subscriptions (more if you count lifetime buyers, ~15% of revenue). Built over ~10 years with a remote team. Plans: 1 site / 5 sites / 20 sites, annual subscription or lifetime.

WHAT IT IS: 19 fairly simple WordPress/WooCommerce plugins (e.g., Document Library Pro, WooCommerce Protected Categories, Post Table Pro, product tables/options) — small-to-medium tools that each add a specific function. Simplicity is how they can run so many.

IDEA ORIGIN (organic, never planned 19): First plugin (WooCommerce Protected Categories) came from the WooCommerce Ideas Forum — they picked an idea many people were voting for (a gap in the market). Second (Post Table Pro) came from a client project. After that, customer FEATURE REQUESTS surfaced ideas — sometimes the best way to deliver a request was a whole new plugin, not a feature. "Get a product out there and keep your ears open" — user feedback flows in without asking, and creative thinking turns it into more products.

GROWTH — organic SEO + cross-promotion: Most customers always came from ORGANIC SEARCH. Because the first plugin was unique (a market gap), Katie (a marketer) published blog posts/tutorials ("how to password protect categories in WooCommerce") and ranked top of Google quickly → first sales within days. They've always produced genuinely helpful, unique content across many use cases. The portfolio enables CROSS-PROMOTION / multiple sales from the same customer: 1-plugin and 2-plugin bundles; for each product they pick a closely-related plugin to upsell; 3 days post-purchase, send an email offering 50% off the next plugin; segmented Black Friday campaigns ("discount off your NEXT plugin" for existing customers); banners on settings pages reminding users of complementary products. Trick: segment the list so you recommend very closely related products → maximizes likelihood of buying.

PLAYBOOK TO START OVER (multi-product software company, 2026):
1. Focus on an area you're already FAMILIAR with (e.g., if you build WordPress sites for clients, build WordPress products) — that's where you have unique insight into the gaps.
2. Come up with SEVERAL product ideas at once — start with a long list, research/validate each, choose a handful with the most potential, and prioritize ideas with OVERLAPPING markets (for cross-promotion).
3. Build the ONE with the most potential first (largest audience where you can carve out share) and launch it as your ONLY product — don't launch multiple at once; each needs dedicated marketing time and listening to early users. Don't spread yourself thin.
4. When ready for product #2, market it as a STANDALONE product and add advanced cross-promotion (cross-linking on your site, emailing existing users with discounts, beta-test invites, docs pages about the other product, post-purchase emails).
5. Repeat until you have a portfolio that each generates revenue — without spreading so thin you can't do any justice.

TECH STACK: ClickUp (project management, time tracking, company chat), GitHub (free, source code), Zapier (automations), WordPress (company site) + Easy Digital Downloads (~$300/year, sells plugins / licensing / download delivery).

ADVICE: Just do it — get to work and launch a product. Once something is out in the world, opportunities (and feature requests that lead to future products) start coming. If you do nothing, nothing happens.

PRODUCER REFLECTION: Multiple products used to be crazy (each meant an engineering team and more daily bugs), but AI lets you spin up an app in a day — so the audience/customer is what's valuable. The right way: build different apps for the SAME customer and cross-sell them as separate products (better for the customer than one bloated monolith). Start with ONE thing you know a bit about; ideas then "come to you like water." (Cf. John Rush, and the health-apps founder doing the same.)

---

TITLE: I Make $16K/Month... Even In A "Tiny" Niche
FOUNDER: Nick (Ukraine) — BlockToPin (Block to Pin), a Pinterest marketing/automation tool
DATE: 2026-02-05
URL: https://www.youtube.com/watch?v=hYF4fQYlrso

NUMBERS: ~$16K+ MRR over ~2 years. 400+ active subscribers, churn ~10%. Plans: Starter ~$39/month, plus Agency and Enterprise tiers. Steady ~300-500 visitors that compound over time.

WHAT IT IS: Pinterest is "Google for images" (500M+ active users actively looking for stuff). BlockToPin auto-creates Pinterest pins for your website (designing a pin manually takes 5-10 min, and you need 5-10 pins/day to grow) — it builds a month or two of good-looking, SEO-optimized pins in a few minutes, scheduled, with analytics.

BACKGROUND / IDEA: Software engineer since 15. The 2022 war in Ukraine worsened his life and caused a long depression; he realized the corporate path wasn't for him. Found the indie hackers community + "ship/launch" culture and rode the AI wave. Created a few apps — all failed, $0 revenue. Then made an AI blog about his passion (cocktails) and tried every traffic method (Google, Instagram, Facebook, Pinterest) — Pinterest worked best. He hired someone to create pins, realized he could automate it, and built the first BlockToPin in ~2 months. (He chose this market because he felt the pain himself — a tedious, repeated process he could do better/faster/cheaper.)

BUILD: Idea Dec 2023, built nights/weekends around a 9-5 using GitHub Copilot (Cursor/Claude Code didn't exist yet). Scrappy version in 7 days but had to rewrite most of it; ~2 months total. Launched with a LIFETIME deal (didn't expect sales) to ~1,000 Twitter followers — nothing happened; first paying customer took 10 days. Switched to subscriptions, improved the product, and over ~a month slowly got real customers.

GROWTH (no hack — asymmetric grind): Three best channels = WORD OF MOUTH, AFFILIATES, and SEO/LLM recommendations (ChatGPT etc.). He cares deeply about every user — reviews their screen recordings when they're stuck or not growing on Pinterest, adjusts their strategy, builds requested features in hours/days. People feel that care and recommend him → it snowballs (strangers start using the app). SEO/LLMs: heavy upfront grind (wrote all the articles, reached out to influencers, posted on Reddit, built backlinks), then customers come on autopilot. "Asymmetric marketing" — struggle a lot upfront, then keep getting customers automatically.

SEVEN-STEP MICRO-SAAS FRAMEWORK (start over, 2026):
1. Find something people ALREADY DO and ALREADY PAY FOR — a completely unique experience is extremely hard to sell as an indie hacker.
2. Research what exists — Google competitors; read their G2 / AppSumo / Capterra reviews; watch every YouTube video; list the pain points / what people dislike. Also check how competitors use AI (often they don't, or it's not core, because big companies can't easily rip out 90% of complexity). From this, define MVP requirements: faster, cheaper, better for ONE specific niche — your app should be the BEST for that specific person (and "a disaster for everyone else").
3. Create the MVP with Claude Code — 1-2 weeks max.
4. TALK to your ICP — find them anywhere (Reddit, X, cold outreach, YouTube/TikTok/Reels, random Facebook groups). If you did your homework, they'll happily try it (better/faster/cheaper than competition). If not, your ICP understanding or reach is wrong — adjust the app or the ICP. You CAN'T hide behind directory submissions or a Product Hunt launch — you need a real human who benefits.
5. Treat that first customer like your EMPLOYER — review everything they do, ask for feedback, implement suggestions the same day, make sure they're 100% satisfied.
6. Do that for a few dozen people → the app gets truly valuable for your ICP; customers become fans, recommend you, and you learn exactly where they hang out.
7. Keep improving the app ~1% every day (churn, onboarding, emails). Math: add ~1 paying customer/day at ~10% monthly churn → ~200 paying customers by year-end; at $50 each → a $10K MRR business. Feasible for almost any niche if you truly solve someone's problem.

TECH STACK: Vercel (host web app), Hetzner (run scrapers on his server), Oxylabs (proxies), Gemini (AI text), FAL (AI images), Sequency (emails / churn prevention).

ADVICE: Try different things; once ready, pick ONE niche, solve ONE specific pain point, and stick with it for at least a few months — but don't just build features in silence; try different marketing angles (X, Reddit, email, YouTube) to reach your audience and build features that stand out. Eventually you find what works → double down.

PRODUCER REFLECTION: You can take an OLD/proven idea (Pinterest automation has existed for years) and add an AI spin to win. Don't judge a "$16K/month, tiny niche" business by MRR alone — look at GROWTH and CHURN; a mature, proven market is more durable than a flash-in-the-pan AI tool.

---

TITLE: I Made $500K From 8 Different Income Streams
FOUNDER: Florin Pop ("Floren") — developer, content creator; a portfolio of online projects
DATE: 2026-02-01
URL: https://www.youtube.com/watch?v=47QXbPGyzBI

NUMBERS: $500,000+ over 6 years across a portfolio of income streams: a course ($180,000+), his first successful SaaS ($68,000 revenue, later sold for $50,000), YouTube (ads + sponsorships, $100,000+), freelancing (tens of thousands), an ebook ($30,000+), consulting ($14,000), and smaller products ($10-15K combined). "None is massive on its own, but together they reduce risk."

BACKGROUND: Learned to code in high school → freelancing (first dollar online) → 2 years in a corporate dev job (felt he was wasting his potential) → quit in 2019 to go all in. Used to chase big-money fast ideas and burned out repeatedly; shifted to a simple loop: "Build your stuff, share it online, get feedback, monetize, and repeat."

WHY A PORTFOLIO (the "income portfolio" mindset): He didn't plan 12 projects — early on he was obsessed with finding the ONE idea that changes everything, and felt like a failure whenever something didn't work fast. Two realizations: (1) most projects fail due to TIMING, DISTRIBUTION, or MARKET — not because they (or you) are bad; (2) betting everything on one idea is risky emotionally and financially → burnout. So he built smaller projects (less pressure) — some for learning, some for money, some for audience. Over time they COMPOUND: content got attention → attention made products easier to sell → products created leverage. Like investing: don't put all your money in one stock — spread across many (index-fund mindset). Stopped putting all his time into one idea and started iterating fast.

MANAGING THE TIME (the key nuance): It's NOT about building 8 projects at once. It's building ONE project at a time, focusing on it, growing it to a point where it can sustain itself (subtract yourself from day-to-day operations), THEN moving to the next.

WHERE PEOPLE GO WRONG vs. RIGHT: Wrong = multiple projects in DIFFERENT niches at the same time (a fitness app + a B2B SaaS for creators). Right = build a portfolio AROUND THE SAME NICHE you know well. His path: created content for developers → products for developers → a learning platform for developers. Different products (course, ebook, SaaS) all targeting the SAME customer — that's what successful serial entrepreneurs do (and it enables cross-selling: someone who takes your course also signs up for your SaaS).

PLAYBOOK TO FIND YOUR FIRST WIN (start over):
1. Build something SMALL but useful — in days/weeks, not months (don't burn out); aim for useful, not perfect (a tiny tool/app/guide that solves a real problem). Best if you build it for yourself.
2. SHIP IT PUBLICLY (non-negotiable) — post on Twitter, YouTube, Reddit, TikTok, wherever your potential clients hang out. Most projects fail because nobody heard of them.
3. GET FEEDBACK — do people use it, ask questions, come back, complain? Use it to improve.
4. Add MONETIZATION early — a pay tier is the real validation. The goal isn't to get rich; it's to validate that the problem is worth paying to solve.
5. DECIDE to double down or move on — after a few weeks/months, if there's traction, double down; if flat, move on without guilt. Every project teaches you something.
LOOP: build → ship → feedback → monetize → decide → repeat until something works. Then REDUCE how much it depends on you (automate, simplify, remove yourself) — frees time for the next idea AND makes it easier to sell later (e.g., his coding course now brings passive revenue).

TECH STACK: Next.js, Supabase (DB/auth), Creem (payments), Vercel (hosting), Beehiiv (newsletter), DataFast (analytics), ChatGPT (AI).

ADVICE: Stop comparing yourself to others — everyone's on their own journey at a different stage. "Stop comparing your level 3 with someone's level 20."

PRODUCER REFLECTION: There are many ways to win — go all-in on one project OR run a portfolio. What matters is SHIPPING — putting the video/course/SaaS/MVP out into the world. "Action produces information." If you don't know what to do, just start doing.

---

TITLE: How I Built It: $17K/Month Open Source SaaS
FOUNDER: Nevo — Postiz (Posties), the biggest open-source social media scheduling tool
DATE: 2026-01-28
URL: https://www.youtube.com/watch?v=RPM4ImzcIFc

NUMBERS: $17K MRR, 472 subscribers, churn ~19% (trying to lower), ~3,830 trials since Aug 2025, 21% trial-to-paid. Downloaded ~5M times (open-source). ~80% margins. SaaS tiers: Standard / Team / Pro / Ultimate (different channels + features). The open-source self-hosted version = the SAME as the cloud offering (no crippled "open core").

WHAT IT IS: Schedule posts to 25 social platforms (the most of any tool), with AI. Open-source/self-hosted is free (devs do the hard work of approving each provider themselves); the cloud version is the paid, hosted convenience.

BACKGROUND: A developer for many years, not originally an open-source person. Met people at a co-working space building an open-source notification infra tool; joined that company for 2 years and saw it go 0 → 32,000 GitHub stars (growth he'd never seen). Did niche open-source consulting for ~a year (was one of few people talking about it) but got stressed from endless meetings, so returned to building products — everything he builds now is open-source.

WHY OPEN SOURCE IS A GREAT WEDGE IN 2026: Everyone can build almost anything now and the market is flooded with competitors (thousands of social schedulers exist), so you need DIFFERENTIATION. Open source introduces your project to millions of developers — a "blue ocean" angle to penetrate a flooded market via transparency + fast feedback. Developers won't pay you (treat the OSS version as a free tier — they self-host, you pay no usage), but they: build your brand, spread word of mouth, generate tons of UGC/blog posts/SEO (people writing "how to use Posties", reviews, directory listings with high domain authority), contribute bug reports/features (faster iteration), and increase credibility (non-devs see an active GitHub with recent commits). The BIGGEST money in open source is often SELF-HOSTED ENTERPRISE SUPPORT (enterprises who won't put data outside will self-host but need paid support). Don't fear someone copying you — today BRAND wins; copycats are always one step behind the original creator and usually abandon it.

THE OPEN-SOURCE LAUNCH PLAYBOOK (run this every week):
STEP 1 — PREPARATION (treat your GitHub README as your landing page): write everything clearly; if you have an alternative, position as "open-source alternative to X" for fast context; add a license (MIT, Apache 2, or AGPL3 — choose deliberately); create GitHub ISSUES for features you want others to build (much easier for contributors to pick up); open a Discord server; write DOCS on how to deploy (critical — if they can't deploy, they churn and you don't trend); provide a DOCKER image to make deployment trivial.
STEP 2 — TRAFFIC / "the launch" (get into GitHub's trending feed by getting max traffic in the shortest time):
  - Pre-register accounts ~2 weeks ahead: Hacker News; Reddit (build some karma first or your posts get filtered); Lemmy (a self-hosted Reddit — great for open source, posts easily get 100+ upvotes); Dev.to, Medium, Hashnode.
  - Write an article on Dev.to/Medium/Hashnode about how you built it / that you launched (later, listicles like "top 10 open-source projects to check in 2026" for stars/trending). These rank AND feed the Google Discover feed (his main traffic source) — invest in title + cover image like a YouTube thumbnail.
  - Hacker News: submit "Show HN: [project]" linking to your GitHub REPO (not your main site) — HN loves OSS, high chance of the main feed (~10,000 views).
  - Reddit: post on r/selfhosted (where self-promotion of open source is welcomed) — re-post each new version with features; ask for a star; be humble, build-in-public, use "I" not "we"; post monthly. Cross-post to r/webdev, r/programming (and r/LocalLLaMA, r/AI_Agents, r/LangChain for AI).
  - Push everything else you have (X, LinkedIn, newsletter) to your GitHub.
  - Do ALL of these in the SAME WEEK to hit the trending feed → star count rockets, more Discord joins, more issues/PRs/forks.

TECH STACK: Railway (backend), Vercel (Next.js marketing site only, own backends), SEMrush + Ahrefs ($20 dashboard only) (SEO), Resend (emails), Cloudflare R2 (hosting), Dub.co (short links + affiliates), Plausible (analytics), OpenAI + FAL (AI text/images), a "translated"/transcoding service ($600 — resize videos per platform so posts never fail — biggest expense), Outrank (1 SEO article/day), Cursor ($20), WebStorm (IDE), Beehiiv (newsletter), Discord (free support), GitHub Copilot + Sentry + GitHub Actions (free for open source).

ADVICE (slightly controversial): LEARN a lot before you build (but avoid analysis paralysis). After many startup failures he paused and read — "Traction" (marketing), Alex Hormozi ($100M Offers), Russell Brunson (lead gen) — then made smarter decisions. Many people jump into B2C (harder if you can't do distribution), grind a year, fail, then realize they should've gone B2B. Spend ~half your time learning, half creating.

PRODUCER REFLECTION: In a world where AI writes any code (often referencing open-source code), the value of code is low — value is in BRAND, and open source is a great way to build brand and get FREE distribution as a bootstrapper. You don't need to reinvent the wheel; distribution (here, the open-source angle) changes the game.

---

TITLE: How I Used Reddit to Build a $34K/Month SaaS
FOUNDER: Roman — co-founder of Goji Berry AI (Gojiberry), an intent-based outreach tool
DATE: 2026-01-25
URL: https://www.youtube.com/watch?v=pvjalHFNM9Q

NUMBERS: ~$30K MRR (24K+ shown), from $0 four months earlier. Reddit drove 11 MILLION impressions and 40,000+ website visitors (would've cost hundreds of thousands in ads), landing the first ~100 customers. Most users on the $99 plan (unlimited high-intent leads + outreach).

WHAT IT IS: Gojiberry finds HIGH-INTENT leads on LinkedIn by their signals (liking a specific post, interacting with competitors, just raised funding, just hired), then automates LinkedIn outreach with AI-personalized messages → acceptance/reply rates well above industry because the leads are warm and the messaging is tailored.

BACKGROUND: Mechanical engineer → learned affiliate marketing pre-COVID → freelancing → 2023 launched first SaaS (Coco AI), scaled to $50K MRR with outreach, SOLD it to a US venture. What made that business great was the acquisition method (outreach), so they built Goji Berry around it.

REDDIT'S IMPACT (beyond the visible): 11M impressions + 40K visitors, but the bigger effect is OMNIPRESENCE — almost everyone on demo calls / other platforms says "oh, you're the Reddit guy." The more leads see you, the more likely you close them.

EXAMPLE POSTS: "I paid 5 influencers on LinkedIn to promote my SaaS. Here's what $1,250 got me" → 160K views, 543 upvotes, ~2,000 visitors, ~10-15 clients. "We got rejected from the Y Combinator interview" → 179,000 views, ~15 clients. Lesson: TELL A STORY + SHOW PROOF (include the influencer post / receipts). Even with no success yet, you can post about what you're doing / the problem you solve. You can turn ANY life event into a Reddit post.

TOP 3 REASONS A POST GOES VIRAL:
1. Use AI to write it — he's not a native English speaker, so he tells his story to ChatGPT by VOICE, then asks it to translate/correct (lets you go deeper into details than writing it all).
2. The initial start — get as many upvotes as possible in the first 5-10 minutes (he has a friend group that upvotes/comments each other's posts).
3. NEVER put your SaaS directly in the post — trigger curiosity by highlighting it; add proof so readers know it's real.

REDDIT PLAYBOOK (start over, 2026):
1. Fresh account — ONE account per browser (Chrome/Firefox/Safari). Do NOT create it with a brand-new email (new email + new Reddit = instant ban).
2. Add a profile picture, link your SaaS in the bio, and activate the feature that HIDES your feed (so people who check your profile don't see you only ever talk about the same SaaS).
3. First 7-14 days: NO marketing — just comment and upvote to warm up the account and build karma (more karma = stronger account).
4. After 7-14 days: start posting.
5. Then start marketing — but some subreddits don't allow promotion (e.g., r/ycombinator-style), not worth posting there.
6. Change the ANGLE with every post (redirect to a YouTube video, a Twitter post — get creative).
7. Get at least 10 upvotes in the first 10 minutes (he has a group of 15 marketers who upvote each other's posts) so external people then push it higher.
8. Reply to EVERY comment — engagement drives more upvotes and higher ranking.

HANDLING HATE/BANS: Show PROOF (no one can argue with "I make $25K MRR" if you show it), then BLOCK negative/insulting people. It's frightening at first (15 bad comments saying you'll never make it) — stick with it and believe in what you're doing. (Pat: he grew Starter Story on Reddit — people created a petition to ban him; it felt scary but didn't matter at all in hindsight.)

CONTENT IDEAS: Main source is his daily life as a SaaS marketer — the more he does, the more stories he has (YC rejection → post). Even beginners can post about how their SaaS is going / the problem they solve.

TECH STACK (marketing-heavy): Instantly AI (cold email, ~$800/mo, high volume), Outrank (SEO, $99/mo), Goji Berry AI itself (LinkedIn/high-intent outreach, $99/mo), Calendly (~$20), Framer (landing pages, ~$49/mo), ChatGPT + Nano Banana (posts/graphics, ~$40/mo), Sales Navigator (~$100/mo on some accounts).

ADVICE: Advertise the way you'd love to be advertised to — he loves entrepreneur success stories (like Starter Story), so that's how he markets.

PRODUCER REFLECTION: Reddit isn't a platform to SCALE to $10-20K MRR alone — it's for your first 10-100 customers and (crucially) REAL product feedback from honest people. "Don't BS me" vibe — exactly what a beginner needs. Rip off the band-aid and just post.

---

TITLE: How I Built a $13K/Month SaaS
FOUNDER: Aayush (+ partner Ken/Kumar) — Elephas (LFS), a Mac AI assistant
DATE: 2026-01-21
URL: https://www.youtube.com/watch?v=R4BS_UiTBPw

NUMBERS: $0 → $150K ARR (~$12K/month) over 3 years, 2-person team, bootstrapped. Reddit took them 0 → $3K MRR in 6 months; SEO took them $3K → ~$12K/month (~$70,000 in 12 months of 2023 purely from Google). ~180K website visits/year. Four revenue channels: own website (Gumroad licenses, ~$110K this year), Setapp bundle, Mac App Store (~$12K), iOS App Store. Plans: monthly, annual, AND lifetime (Mac/downloadable-app customers expect a one-time payment — they've kept lifetime and gradually raised prices).

WHAT IT IS: Elephas indexes your LOCAL files (PDFs, Apple Notes, etc.) into "super brains" (knowledge bases) you can chat with to create content/reports for work. Has an offline mode (download open-source models, turn off Wi-Fi). The value: AI GROUNDING — answers come only from YOUR documents, so it doesn't hallucinate; people trust it (vs. ChatGPT/Claude making things up). Integrations: files, folders, YouTube videos, web pages, Apple Notes.

BACKGROUND: Partner Kumar/Ken started Elephas and hired Aayush as a consultant right after Aayush quit an 11-year corporate job (he was part-time consulting on product/marketing). Good early results → invited to join as co-founder / the marketing guy; Ken codes, Aayush markets.

THE "REDDIT THEN SEO" PLAYBOOK:
REDDIT (0 → $3K MRR in 6 months): a goldmine of high-intent niche audiences — great for early feedback, traffic, and conversions. They posted on niche subreddits asking for feedback, showcasing the product, giving demos; early customers' feedback shaped the product (their "super brain" feature came from a Reddit post's feedback/requests). Example post: a VIDEO DEMO wrapped in a problem→solution/story framing ("me/my friend faced this problem, so I built this feature; try it free for 30 days; I'm just looking for feedback"). Works because it's NOT blatant self-promotion — Reddit is smart and hates being sold to, but appreciates you explaining the reasoning and talking to them like adults. "Show, don't tell" (video demos).
REDDIT step-by-step: (1) list 15+ subreddits where your ICP hangs out (use "the map of Reddit", a free GitHub project, to discover niche subs); any sub >5,000 members is fine — SMALLER niche subs are often better (simpler rules, more forgiving mods who want content). (2) Pick one feature/pain point, make a short video demo, explain why you built it simply, add a link (free 30-day trial) at the bottom — use UTM links to track feature/date/subreddit. (3) Post on ONE subreddit/day, analyze, tweak the copy, repeat on another sub. NEVER post to all subs in one day (overlapping audiences notice).
On hate/bans: you will get hate and get banned — that's okay; keep backup/burner accounts, develop a thick skin. Success on Reddit has no fixed benchmark (posts range from 0 to 300-400 upvotes) — the real value is QUALITATIVE: the comments, engagement, and honest feedback from real people (Reddit is one of the last low-bot places for raw honest thoughts).

SEO ($3K → $12K, ~$70K in 2023 — discovered accidentally): They wrote help/support articles for customers (e.g., "how to create OpenAI API keys") that ranked #1 on Google for 6-8 months and drove traffic → realized Google is a genuine inbound channel. Then did keyword research to find UNDERSERVED, low-competition, high-demand queries; wrote listicles like "18 best ChatGPT Mac apps (free and paid)" → ranked #1, high-intent traffic + conversions. Now also getting high-intent traffic from AI answer engines (ChatGPT, Claude) referencing their articles (those visitors have already decided to buy).
SEO PLAYBOOK: (1) Know your exact POSITIONING (how the customer sees the market and where you fit — for them, "ChatGPT Mac apps"). (2) Do keyword research thinking AS the customer; use Ahrefs to find what your ICP searches and what competitors rank for. Filter: keyword difficulty <20 AND search volume >500 — for a new site with low domain authority, go after low-volume, high-intent, low-competition keywords, not high-volume/high-competition ones. (He bought Ahrefs at $129, used 500 credits, made a list of 30-50 topics, wrote those posts; start with 2-3 blog posts/week, scale to 6-7.) (3) Use AI as a RESEARCH ASSISTANT (figure out what content already works, make an outline/scaffold) but add your OWN spin/insights/user data — "as long as you add NET NEW information to the internet, you'll win with SEO."

WHY BOTH IN HARMONY: Early on you need feedback, traction, niche audiences, fast feedback → Reddit. Eventually Reddit hits diminishing returns; for sustainable, scalable high-intent traffic without ad dollars → SEO.

TECH STACK: Claude Code ($100/mo, dev + marketing — "the #1 AI tool everyone should use"), Swift (native Mac app), Ahrefs ($129/mo — top tool; if you can't afford it, get one month and batch a quarter of keyword research), NeuronWriter (pre-publish blog checks), the Map of Reddit (subreddit research), an n8n mention-tracker (know when Elephas is mentioned on Reddit/social to reply), ClickUp (team work), Discord (team + a thriving user community for feedback/feature requests), Superblog (hosting), MailerLite (email), Plausible (analytics), Google Search Console (free, SEO).

ADVICE: "Put more BUY BUTTONS on the internet." Many people build in silence for 6 months behind a free waitlist and nobody buys — people are too afraid to charge. The learning/growth from a real buy button beats any marketing/sales book. He and his partner had 30+ failed projects before this — get failure out of the way fast: test ideas in short sprints, fail fast, learn fast, see which get traction/revenue, then double down.

PRODUCER REFLECTION: The Reddit→SEO playbook still works today and is almost free (just effort). On Reddit, even a first post with ~50 upvotes is a win — it's about qualitative feedback, not overnight revenue. Going on Reddit to experience honest negative feedback is itself an important step in becoming a founder.

---

