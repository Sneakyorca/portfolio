import { carePlan, process, WHATSAPP_URL } from "../data/content";

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <p className="title fade-in">Process</p>
          <h2 className="fade-in-up t-h2" data-reveal-delay="0.06s">
            How we&apos;ll work
          </h2>
        </div>
        <p
          className="fade-in t-lead max-w-md lg:text-right"
          data-reveal-delay="0.12s"
        >
          From first message to launch in about 3 weeks, with a live preview and
          unlimited revisions before you go live.
        </p>
      </div>

      <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.map((step, i) => (
          <li
            key={step.title}
            className="reveal relative"
            data-reveal-delay={`${0.08 * i}s`}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="grid place-items-center size-11 shrink-0 rounded-full border-2 border-primary font-mono text-sm font-medium text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block h-px flex-1 bg-border"
                />
              )}
            </div>
            <h3 className="t-h4 mb-2">{step.title}</h3>
            <p className="t-small">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-24 rounded-xl border bg-card p-8 md:p-10 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col">
          <p className="t-eyebrow text-primary mb-4">After launch</p>
          <h3 className="t-h3 mb-4">Monthly care and revisions</h3>
          <p className="mb-8 max-w-sm">
            Your site stays secure, backed up and up to date, and you can send
            changes whenever you need them.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto self-start inline-flex items-center gap-2 px-6 py-3 rounded-full border font-display font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Ask about care plans
          </a>
        </div>
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {carePlan.map((item) => (
            <li key={item.title} className="border-t border-border pt-5">
              <h4 className="t-h4 mb-1.5">{item.title}</h4>
              <p className="t-small">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
