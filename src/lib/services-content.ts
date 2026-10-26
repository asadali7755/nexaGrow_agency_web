// lib/services-content.ts — deep content for each service page.
//
// Why this file exists: every service page shipped with roughly 90 words of
// unique copy. Commercial queries like "social media marketing agency Dubai"
// are won by pages that actually answer what the service is, who it suits,
// how it runs, what it costs and what buyers worry about. This is that content,
// kept separate from the slider/card metadata in services.ts so each can change
// without churning the other.

import type { ServiceFaq, ServiceStep } from '@/types';

export interface ServiceContent {
  seoTitle: string;
  primaryKeyword: string;
  intro: string[];
  whoFor: string[];
  process: ServiceStep[];
  deliverables: string[];
  outcomes: string[];
  pricingNote: string;
  faqs: ServiceFaq[];
}

export const serviceContent: Record<string, ServiceContent> = {
  'social-media-marketing': {
    seoTitle: 'Social Media Marketing Agency',
    primaryKeyword: 'social media marketing agency',
    intro: [
      'Social media marketing is the work of turning a business account into a channel that actually produces enquiries — not just likes. That means a content plan built around what your buyers search for and worry about, a posting rhythm you can sustain, and a way to move people from a reel into a conversation.',
      'Most businesses we talk to are already posting. The problem is rarely effort; it is that the content is about the business rather than about the customer, and there is no path from the post to a booked call. We fix the strategy layer first, then the production.',
      'We work across Instagram, TikTok, LinkedIn and Facebook, and we pick the platform by where your buyers already are rather than running all four by default.',
    ],
    whoFor: [
      'Service businesses (clinics, salons, real estate, consultancies) that get most work through referrals and want a second, predictable channel.',
      'Local retail and restaurants that need footfall and bookings from a specific city, not a national audience.',
      'B2B companies that need LinkedIn to generate conversations with decision-makers rather than vanity reach.',
      'Brands that already have a product-market fit and need distribution, not businesses still testing whether anyone wants the product.',
    ],
    process: [
      {
        title: 'Audit and positioning',
        desc: 'We review your existing accounts, your three closest competitors, and the comments and DMs you already get. The output is a positioning line and three content pillars that your audience actually responds to.',
      },
      {
        title: 'Content calendar',
        desc: 'A month of planned posts mapped to those pillars, with hooks written before anything is filmed. You approve the calendar before production starts, so nothing is a surprise.',
      },
      {
        title: 'Production',
        desc: 'Reels, carousels and stories produced to the calendar. Where you can film raw footage yourself, we direct it and edit; where you cannot, we produce it.',
      },
      {
        title: 'Distribution and community',
        desc: 'Scheduled publishing at the hours your audience is active, plus replying to comments and DMs within working hours so interest does not go cold.',
      },
      {
        title: 'Report and adjust',
        desc: 'A monthly report on reach, saves, profile visits, link clicks and enquiries. We double down on the pillar that produced conversations and drop the one that did not.',
      },
    ],
    deliverables: [
      '12–20 posts per month (mix of reels, carousels and static)',
      'Daily stories on your primary platform',
      'Written hooks, captions and hashtag sets',
      'Community management during working hours',
      'Monthly performance report with next-month plan',
    ],
    outcomes: [
      'First 30 days: consistent publishing, a clean profile, and a working link path from bio to enquiry.',
      'Days 30–90: reach and saves grow on the pillars that resonate; you start seeing inbound DMs that mention specific posts.',
      'After 90 days: enough data to say which content type produces enquiries at the lowest cost, which is where the compounding starts.',
      'Social is a compounding channel, not a switch. If you need leads this week, pair it with Google Ads.',
    ],
    pricingNote:
      'Social media retainers typically run from the low hundreds of dollars a month for a single platform with light production, up to several thousand for multi-platform work with on-site filming. The biggest cost driver is video production volume, not the number of posts. We quote after the audit so the number reflects your actual scope.',
    faqs: [
      {
        q: 'How long before social media brings in clients?',
        a: 'Expect 60–90 days before the channel produces enquiries reliably. The first month is mostly setup and finding which content pillar works. Anyone promising leads in week one is either running ads or guessing.',
      },
      {
        q: 'Do I need to appear on camera?',
        a: 'It helps a great deal for service businesses, because people buy from people. But it is not mandatory. We can build a content plan around product, process, results and customer stories instead.',
      },
      {
        q: 'Which platform should my business be on?',
        a: 'If you sell to consumers locally, Instagram and TikTok. If you sell to businesses, LinkedIn. If your buyers are over 40 and local, Facebook still performs. We recommend one or two, properly, rather than four badly.',
      },
      {
        q: 'Do you handle the ads as well, or only organic content?',
        a: 'Paid social can be added to any retainer. Organic builds trust and gives you creative that is already proven; paid puts budget behind the posts that already earned attention. Ad spend is billed separately from our fee.',
      },
    ],
  },

  'ai-automation': {
    seoTitle: 'AI Automation for Business',
    primaryKeyword: 'AI automation agency',
    intro: [
      'AI automation means handing the repetitive parts of your operation — answering the same enquiry twenty times a day, chasing quotes, re-typing leads into a spreadsheet — to a system that does it reliably at 2am.',
      'The valuable automations are boring ones. A WhatsApp assistant that answers your ten most common questions and books a call. A workflow that takes a form submission, creates a CRM record, and sends a follow-up if nobody replies in 48 hours. These save hours a week and stop leads going cold.',
      'We build around the tools you already use rather than asking you to migrate everything. If your business runs on WhatsApp and a spreadsheet, we automate WhatsApp and the spreadsheet.',
    ],
    whoFor: [
      'Businesses getting more enquiries than they can answer quickly, where response time is costing them deals.',
      'Teams re-entering the same data into two or three systems by hand.',
      'Service businesses whose sales depend on booked calls and who lose prospects between first contact and the call.',
      'Owners spending evenings replying to routine WhatsApp questions.',
    ],
    process: [
      {
        title: 'Map the current process',
        desc: 'We sit with you and write down what actually happens from first enquiry to paid invoice, including the manual steps nobody documented. Most of the value is found here.',
      },
      {
        title: 'Pick the two highest-cost steps',
        desc: 'We automate the two steps costing the most hours or losing the most leads. Automating everything at once is how these projects stall.',
      },
      {
        title: 'Build and test on real data',
        desc: 'The workflow is built and run against your real enquiries in parallel with the manual process, so you can compare before switching over.',
      },
      {
        title: 'Handover with a kill switch',
        desc: 'You get documentation, access, and a way to turn any automation off instantly. Automation you cannot stop is a liability.',
      },
      {
        title: 'Monitor and extend',
        desc: 'After a month of live running we review what the automation handled, what it escalated to a human, and what to automate next.',
      },
    ],
    deliverables: [
      'Process map of your current lead-to-customer flow',
      'WhatsApp or web assistant trained on your services and FAQs',
      'CRM or spreadsheet automation with follow-up sequences',
      'Lead routing and notification rules',
      'Documentation and admin access, owned by you',
    ],
    outcomes: [
      'Response time to a new enquiry drops from hours to seconds, which is usually the single biggest win.',
      'Routine questions stop reaching you at all, so your attention goes to prospects who are actually ready.',
      'Nothing is lost between form submission and follow-up, because the follow-up is no longer a person remembering.',
      'Savings depend entirely on your current volume. We estimate hours saved during the process map, before you commit.',
    ],
    pricingNote:
      'Automation is usually a one-off build fee plus a smaller monthly amount for hosting, monitoring and changes. A single WhatsApp assistant is at the lower end; a full lead-to-CRM pipeline with multiple integrations is several times that. Third-party tool subscriptions are billed to you directly so you keep ownership.',
    faqs: [
      {
        q: 'Will an AI assistant annoy my customers?',
        a: 'It will if it pretends to be human or cannot answer. We build assistants that say what they are, handle the common questions well, and hand over to a person the moment the question goes beyond their scope.',
      },
      {
        q: 'Do I own the automation afterwards?',
        a: 'Yes. Everything is built in accounts registered to you, and you get admin access and documentation at handover. You are not locked into us to keep it running.',
      },
      {
        q: 'What if the AI gives a wrong answer about pricing or availability?',
        a: 'We scope the assistant deliberately narrowly and give it approved answers, not free rein. Anything about custom pricing, legal commitments or availability is escalated to a human by design.',
      },
      {
        q: 'How long does a build take?',
        a: 'A focused WhatsApp assistant is typically two to three weeks from process map to live. A multi-system pipeline is six to eight weeks. The delay is almost always waiting on access to your existing tools, so early access speeds things up.',
      },
    ],
  },

  'web-development': {
    seoTitle: 'Web Development & Website Design',
    primaryKeyword: 'web development agency',
    intro: [
      'A business website has one job: turn a stranger who searched for what you do into someone who contacts you. Most sites fail at this not because they look bad, but because they load slowly, bury the contact path, and say nothing a competitor could not also say.',
      'We build fast, search-friendly sites in Next.js, with the conversion path designed before the visuals. That means a clear offer above the fold, working contact routes on every page, and tracking from day one so you can see what the site is actually doing.',
      'If you already have a site, a rebuild is often not the answer. We will tell you if a focused fix to speed, structure and contact paths gets you most of the result for a fraction of the cost.',
    ],
    whoFor: [
      'Businesses whose current site gets traffic but almost no enquiries.',
      'Companies on a slow page builder where every change requires a developer.',
      'Service businesses that need to rank locally and need the site structured for it from the start.',
      'Anyone launching and who needs the site, tracking and lead routing working together rather than bolted on later.',
    ],
    process: [
      {
        title: 'Goals and conversion path',
        desc: 'We agree the one action the site must drive — a call, a form, a WhatsApp message — and design everything backwards from it.',
      },
      {
        title: 'Structure and SEO architecture',
        desc: 'Page structure is planned around the searches you want to win, with one page per commercial intent rather than one page listing everything.',
      },
      {
        title: 'Design and build',
        desc: 'Built in Next.js for speed and search performance, responsive from phone upward, with real content rather than placeholder text.',
      },
      {
        title: 'Tracking and lead routing',
        desc: 'Analytics, conversion events and email delivery are set up and tested with a real submission before launch. A form that silently fails is worse than no form.',
      },
      {
        title: 'Launch and verify',
        desc: 'We submit the sitemap, verify indexing in Search Console, run a performance check, and confirm every contact route works on a real device.',
      },
    ],
    deliverables: [
      'Custom responsive website built on Next.js',
      'SEO-ready page structure, metadata and schema markup',
      'Contact forms with verified email delivery and WhatsApp routing',
      'Analytics and conversion tracking configured and tested',
      'Search Console and sitemap setup',
      'Admin handover and a short training session',
    ],
    outcomes: [
      'Pages that load in around a second on mobile, which directly affects both ranking and how many visitors stay.',
      'Every page has a working, visible way to get in touch — the most common reason sites produce no leads.',
      'You can see in analytics which pages and sources produce enquiries, so later spend is informed rather than guessed.',
      'A site structured so new service or location pages can be added without a rebuild.',
    ],
    pricingNote:
      'A focused multi-page business site generally sits in the low thousands of dollars; e-commerce and custom web applications run higher. Ongoing hosting is modest. We give a fixed quote after the structure is agreed, so scope changes are a conversation rather than a surprise invoice.',
    faqs: [
      {
        q: 'How long does a website take?',
        a: 'A standard business site is four to six weeks from kickoff. The timeline is driven mostly by how quickly content, photos and approvals come back — the build itself is rarely the bottleneck.',
      },
      {
        q: 'Will the website rank on Google by itself?',
        a: 'No, and be sceptical of anyone who says otherwise. A well-built site makes ranking possible — fast, crawlable, properly structured. Actually ranking for competitive terms needs content and authority built over months.',
      },
      {
        q: 'Can I update the site myself afterwards?',
        a: 'Yes. We set up content editing for the parts that change often and show you how during handover. Structural changes are better left to a developer.',
      },
      {
        q: 'Do you fix existing websites or only build new ones?',
        a: 'Both. We often start with an audit, and if speed, structure and contact paths can be fixed on your current site, we will say so rather than selling a rebuild you do not need.',
      },
    ],
  },

  'google-ads': {
    seoTitle: 'Google Ads Management',
    primaryKeyword: 'Google Ads management agency',
    intro: [
      'Google Ads is the fastest way to put your business in front of people who are actively searching for what you sell, right now. Unlike social, you are not interrupting anyone — you are answering a question they just typed.',
      'It is also the fastest way to waste money. Most underperforming accounts we audit are bidding on broad keywords, sending every click to a homepage, and running without conversion tracking — so nobody can tell which clicks made money.',
      'We run tightly scoped campaigns with proper negative keywords, dedicated landing pages, and conversion tracking configured before a single dollar is spent.',
    ],
    whoFor: [
      'Businesses with a service people actively search for — repairs, clinics, legal, trades, B2B software.',
      'Companies that need enquiries in weeks rather than months and have budget to buy that speed.',
      'E-commerce stores with healthy margins that can support paid acquisition.',
      'Not a fit for very new businesses with no clear offer, or where the margin per sale cannot cover a cost-per-click in a competitive market.',
    ],
    process: [
      {
        title: 'Tracking first',
        desc: 'Conversion tracking is set up and verified before launch. Running ads without it means you are buying clicks with no idea which ones produced business.',
      },
      {
        title: 'Keyword and intent research',
        desc: 'We separate buying intent from research intent and build the campaign only around searches that indicate someone is ready to act.',
      },
      {
        title: 'Landing page match',
        desc: 'Each ad group points at a page that matches the search. Sending "emergency plumber Dubai" traffic to a homepage is the most common and most expensive mistake in paid search.',
      },
      {
        title: 'Launch small, then scale',
        desc: 'We start on a controlled budget to gather data, add negative keywords aggressively in the first weeks, and only increase spend on what converts.',
      },
      {
        title: 'Weekly optimisation, monthly reporting',
        desc: 'Search term review, bid adjustments and ad testing weekly. Monthly reporting on cost per enquiry, not impressions.',
      },
    ],
    deliverables: [
      'Conversion tracking setup and verification',
      'Keyword, competitor and negative keyword research',
      'Search, Display, Shopping or Performance Max campaigns as fitted to your goal',
      'Ad copy writing and ongoing A/B testing',
      'Weekly search term review and optimisation',
      'Monthly report on spend, enquiries and cost per enquiry',
    ],
    outcomes: [
      'Week 1–2: campaigns live, early data arriving, heavy negative keyword work to cut wasted spend.',
      'Week 3–6: cost per enquiry starts stabilising as the account learns and the waste is trimmed.',
      'Month 3 onward: a predictable cost per enquiry you can plan around, and a clear answer on whether the channel is profitable for you.',
      'Results depend on your market and margin. We will tell you during the audit if we think paid search cannot work economically for your business.',
    ],
    pricingNote:
      'Management is normally either a flat monthly fee or a percentage of ad spend, typically 15–20%, whichever is higher. Ad spend goes directly to Google from your own account — we never take your media budget through us. Starting budgets below a few hundred dollars a month rarely gather enough data to optimise.',
    faqs: [
      {
        q: 'How much should I spend on Google Ads to start?',
        a: 'Enough to get roughly 30 clicks a week in your market, so the account has data to learn from. In low-cost markets that is a few hundred dollars a month; in competitive ones like legal or insurance it is considerably more. We size it during the audit.',
      },
      {
        q: 'Who owns the Google Ads account?',
        a: 'You do. We work inside your account with manager access. If we part ways, you keep the account, the history and the learnings — which is not true of agencies that run you through theirs.',
      },
      {
        q: 'How soon will I see leads?',
        a: 'Often within the first week, because you are buying attention rather than earning it. What takes 60–90 days is getting the cost per lead down to a level that is sustainable.',
      },
      {
        q: 'Is Google Ads better than SEO?',
        a: 'They do different jobs. Ads give immediate, controllable volume that stops when you stop paying. SEO is slower and compounds. Most businesses that can afford both should run ads for cash flow while SEO builds.',
      },
    ],
  },

  'brand-strategy': {
    seoTitle: 'Brand Strategy & Identity Design',
    primaryKeyword: 'brand strategy agency',
    intro: [
      'Brand strategy is the decision about what you stand for, who you are for, and why someone should pick you over the cheaper option. The logo is the last five percent of that work, even though it is the part most people start with.',
      'If you compete mainly on price, every enquiry becomes a negotiation. A clear brand position changes the question from "how much" to "are you the right fit", which is a much better conversation to be in.',
      'We work through positioning first, then messaging, then the visual identity that expresses it — in that order, because designing a logo before you know your position means redesigning it later.',
    ],
    whoFor: [
      'Businesses that keep losing on price and want to compete on something else.',
      'Companies that have grown organically and now look inconsistent across their website, socials and printed material.',
      'Founders launching into a crowded category who need a reason to be chosen.',
      'Businesses merging, renaming, or entering a new market.',
    ],
    process: [
      {
        title: 'Discovery',
        desc: 'Interviews with you and, where possible, a few of your customers. What people actually say about why they chose you is usually more useful than what you assume.',
      },
      {
        title: 'Competitive landscape',
        desc: 'We map how your closest competitors position themselves, to find the space nobody is credibly occupying.',
      },
      {
        title: 'Positioning and messaging',
        desc: 'A written positioning statement, your value proposition, tone of voice, and the handful of messages that should appear everywhere.',
      },
      {
        title: 'Visual identity',
        desc: 'Logo, colour, type and imagery direction, designed to express the position rather than to follow a trend.',
      },
      {
        title: 'Brand guidelines',
        desc: 'A document your team, printers and any future agency can follow so the brand stays consistent without you policing it.',
      },
    ],
    deliverables: [
      'Positioning statement and value proposition',
      'Messaging framework and tone of voice guide',
      'Primary logo plus responsive and mono variants',
      'Colour palette, typography and imagery direction',
      'Brand guidelines document',
      'Core templates (social, presentation, email signature)',
    ],
    outcomes: [
      'A clear answer to "why you" that your whole team gives the same way.',
      'Marketing gets cheaper to produce, because the decisions about look and language are already made.',
      'Price conversations get easier, because you are no longer interchangeable with the cheapest competitor.',
      'Brand work does not generate leads by itself. It makes every other channel convert better.',
    ],
    pricingNote:
      'Brand projects are quoted as a fixed fee based on scope — positioning only, identity only, or the full programme. A complete positioning-plus-identity project for a small business typically sits in the low thousands of dollars. Any trademark registration is handled by a specialist and billed separately.',
    faqs: [
      {
        q: 'Can I just get a logo?',
        a: 'Yes, and we will do it. But a logo without a position is decoration. If budget is tight, we would rather spend it on positioning and give you a clean, simple mark than on an elaborate logo for a business that cannot say why it is different.',
      },
      {
        q: 'How many logo concepts do I get?',
        a: 'Two or three fully developed directions, each with a rationale tied back to the positioning, plus two rounds of refinement. Presenting twenty options usually means the strategy work was skipped.',
      },
      {
        q: 'Do I own the final files and copyright?',
        a: 'Yes, full ownership transfers to you on final payment, including source files. Licensed third-party fonts are noted separately so you know what needs its own licence.',
      },
      {
        q: 'How long does a brand project take?',
        a: 'Four to eight weeks depending on scope and how quickly feedback comes back. Discovery interviews are usually the scheduling bottleneck.',
      },
    ],
  },

  'content-creation': {
    seoTitle: 'Content Creation & Production',
    primaryKeyword: 'content creation agency',
    intro: [
      'Every channel you run is hungry for content. Ads need creative, social needs posts, your website needs copy, sales needs something to send. Content creation is the production engine that feeds all of it from one consistent brief.',
      'Produced in isolation, content is expensive and inconsistent. Produced as a batch against a plan, the cost per asset falls sharply — a single shoot day can supply a month of social, refresh your website imagery and give the ads team something to test.',
      'We cover photography, video, design and copywriting, and we plan them together so one production run serves several channels.',
    ],
    whoFor: [
      'Businesses running marketing but constantly short of usable photos, video and copy.',
      'Companies using stock imagery that looks like every competitor in their category.',
      'Teams running ads who need a steady stream of fresh creative to test.',
      'Businesses with something genuinely visual to show — a product, a space, a process, a result.',
    ],
    process: [
      {
        title: 'Content plan',
        desc: 'We agree what each channel needs over the next quarter and work backwards to the minimum number of production days required.',
      },
      {
        title: 'Pre-production',
        desc: 'Shot list, scripts, locations and people confirmed in writing before anyone turns up. This is what keeps a shoot day from running over.',
      },
      {
        title: 'Production',
        desc: 'Photography and video captured on site, shot in formats for every channel at once — vertical for social, horizontal for web and ads.',
      },
      {
        title: 'Post-production',
        desc: 'Editing, colour, captions, motion graphics and design, delivered as channel-ready files rather than raw footage you have to deal with.',
      },
      {
        title: 'Asset library handover',
        desc: 'Everything delivered in an organised library you own, labelled so your team can find and reuse it.',
      },
    ],
    deliverables: [
      'Quarterly content plan mapped to channels',
      'Photography shoot with edited, retouched images',
      'Video production with vertical and horizontal edits',
      'Graphic design, infographics and motion graphics',
      'Copywriting for web pages, captions and blog articles',
      'Organised asset library you own and control',
    ],
    outcomes: [
      'A backlog of content, so you stop scrambling for something to post.',
      'Lower cost per asset than commissioning each piece separately.',
      'Original imagery that distinguishes you from competitors using the same stock library.',
      'Enough creative variety for paid campaigns to test properly instead of running one tired ad.',
    ],
    pricingNote:
      'Content is quoted per production day or as a monthly retainer. A single photo and video day covering a month of social is the usual entry point; ongoing retainers with monthly shoots cost more but drop the per-asset price substantially. Travel, talent, props and locations are quoted separately and transparently.',
    faqs: [
      {
        q: 'How much content comes out of one shoot day?',
        a: 'Typically 40–60 edited photographs and 8–12 short-form videos, which is roughly a month of social content plus website and ad creative. The exact number depends on how many setups and locations we can cover.',
      },
      {
        q: 'Do you travel to our location?',
        a: 'Yes. Most production is on site at your premises, which is usually what makes the content distinctive. Travel beyond the local area is quoted separately.',
      },
      {
        q: 'Can you work with footage we already have?',
        a: 'Yes. If you have raw footage or a photo archive, we can often edit, grade and repurpose it into channel-ready assets for far less than a new shoot.',
      },
      {
        q: 'Who owns the final content?',
        a: 'You do, with full usage rights across all channels. Where a shoot involves hired talent or licensed music, we flag any usage limits in writing before production.',
      },
    ],
  },
};
