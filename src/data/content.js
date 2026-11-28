// Client-facing copy and contact details in one place.
// Edit wording here; the sections read from this file.

export const EMAIL = "abdulmaleek.odetunde.dev@gmail.com";

// International format, digits only, for wa.me links.
export const WHATSAPP_NUMBER = "2349132999117";
export const WHATSAPP_DISPLAY = "+234 913 299 9117";
const WHATSAPP_MESSAGE =
  "Hi Abdulmaleek, I found your portfolio and I'd like to talk about a website for my business.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// What I build. `example` points at real work in projects.json / more-work.json.
export const services = [
  {
    title: "Booking websites",
    for: "Salons, studios and service businesses",
    summary:
      "Customers book on your own site and appointments land in your dashboard, not on a marketplace that takes a cut.",
    includes: [
      "Online booking",
      "Services and prices",
      "Product shop with cart",
      "Admin dashboard",
    ],
    example: "AFROHAIR EMPIRE and BIM-GOLD",
  },
  {
    title: "Business websites",
    for: "Brands and creative businesses",
    summary:
      "A fast, mobile-first site that shows what you do and turns visitors into enquiries.",
    includes: [
      "Service and portfolio pages",
      "WhatsApp and contact forms",
      "SEO basics",
      "Works on every phone",
    ],
    example: "Planet 9",
  },
  {
    title: "Landing pages",
    for: "Launches, campaigns and offers",
    summary:
      "One focused page built to get people to take a single action: sign up, book or buy.",
    includes: [
      "Clear call to action",
      "Interactive charts",
      "Contact forms",
      "Fast on mobile data",
    ],
    example: "TradeWithNifemi",
  },
  {
    title: "Web apps",
    for: "Founders with a product idea",
    summary:
      "Sign-in, dashboards and AI features, built with Next.js and Supabase.",
    includes: [
      "User accounts",
      "Database and dashboards",
      "AI integrations",
      "PDF and file exports",
    ],
    example: "ResumeIQ",
  },
];

// Things clients have mentioned after launch (paraphrased, not quotes).
export const outcomes = [
  {
    title: "Bookings come straight to you",
    body: "Customers book on your own website and every appointment shows up in your dashboard.",
  },
  {
    title: "No more platform fees",
    body: "Stop paying booking apps like Fresha a cut of every appointment. Your site, your customers.",
  },
  {
    title: "Built around your business",
    body: "Fully customised to your brand and the way you work, not a template you can't change.",
  },
  {
    title: "You stay in control",
    body: "Update opening hours, services, products, prices and promotions yourself, any time.",
  },
];

export const process = [
  {
    title: "Free call",
    body: "We talk about your business, what the site needs to do and your deadline. WhatsApp or video, whichever suits you.",
  },
  {
    title: "Plan",
    body: "You share your logo, photos, services and a few sites you like. I confirm the pages, features and timeline before any work starts.",
  },
  {
    title: "Build",
    body: "I build the site and send you a live preview link. Ask for as many changes as you like before launch, within the scope we agreed.",
  },
  {
    title: "Launch",
    body: "Your site goes live on your domain, usually in about 3 weeks, and I walk you through your dashboard.",
  },
];

export const carePlan = [
  {
    title: "Monitoring and backups",
    body: "Regular checks that the site and booking system work, plus backups of your data.",
  },
  {
    title: "Security updates",
    body: "Framework and package updates so your site stays secure and fast.",
  },
  {
    title: "Updates and revisions",
    body: "Send changes whenever you need them: text, photos, new sections and anything your dashboard can't do.",
  },
  {
    title: "Small improvements",
    body: "Minor tweaks and new features each month as your business grows.",
  },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on what you need. A booking site with a shop takes more work than a simple business site. Tell me about your project and I'll send you a clear quote, with no obligation.",
  },
  {
    q: "How long does it take?",
    a: "Most sites go live in about 3 weeks. Bigger projects can take longer, and having your logo, photos and service list ready speeds things up.",
  },
  {
    q: "Can I update the site myself?",
    a: "Yes. From your dashboard you can change opening hours, services, products and prices, manage bookings and run promotions. Bigger changes I handle for you, or they're covered by a care plan.",
  },
  {
    q: "Will I still pay a booking platform like Fresha?",
    a: "No. Bookings go through your own website, so there's no platform taking a cut of each appointment. I'll explain any running costs, such as your domain, before we start.",
  },
  {
    q: "What do I need to get started?",
    a: "Your logo, some photos, your list of services and prices, and a few websites you like. If anything's missing, we'll sort it out on the first call.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. I'm based in Lagos and have built sites for businesses in the UK. We can work over WhatsApp, email or video calls.",
  },
  {
    q: "How many revisions do I get?",
    a: "As many as you need before launch, as long as they fit the scope we agree at the start. You review everything on a live preview link and I make the changes. After launch, ongoing updates and revisions are covered by the monthly care plan.",
  },
  {
    q: "Do you use AI to build sites?",
    a: "Yes. I use AI tools like Claude Code, ChatGPT and GitHub Copilot to work faster, which means a quicker turnaround for you. Everything is still reviewed and tested by me before it goes live, and the site is built around your business, not a generic template.",
  },
  {
    q: "What happens after launch?",
    a: "I walk you through your dashboard so you can run things day to day. If you'd like ongoing help, the monthly care plan covers updates, backups and improvements.",
  },
];

// Options for the "What do you need?" field on the enquiry form.
export const projectTypes = [
  "Booking website",
  "Business website",
  "Landing page",
  "Web app",
  "Not sure yet",
];
