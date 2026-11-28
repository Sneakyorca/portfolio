import { faqs } from "../data/content";

// FAQPage structured data so search engines can show these answers directly.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Faq = () => {
  return (
    <section id="faq" className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="lg:grid grid-cols-6 gap-12">
        <div className="col-span-2 lg:sticky lg:top-32 self-start mb-12">
          <p className="title fade-in">FAQ</p>
          <h2 className="fade-in-up t-h2 mb-6" data-reveal-delay="0.06s">
            Questions owners ask
          </h2>
          <p className="fade-in t-small max-w-xs" data-reveal-delay="0.12s">
            Something else on your mind? Ask me on WhatsApp or through the form
            below.
          </p>
        </div>
        <div className="col-span-4 border-t border-border">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              className="faq-item reveal group border-b border-border"
              data-reveal-delay={`${0.04 * i}s`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display font-semibold text-foreground text-[1.0625rem] md:text-lg hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 size-3.5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded bg-current" />
                </span>
              </summary>
              <p className="pb-6 pr-10 max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
