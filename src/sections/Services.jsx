import { outcomes, services } from "../data/content";

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <p className="title fade-in">Services</p>
          <h2 className="fade-in-up t-h2" data-reveal-delay="0.06s">
            What I build
          </h2>
        </div>
        <p
          className="fade-in t-lead max-w-md lg:text-right"
          data-reveal-delay="0.12s"
        >
          Websites for small businesses that want more bookings and enquiries,
          without paying a platform for every customer.
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="reveal border-t-2 border-foreground pt-6"
            data-reveal-delay={`${0.06 * i}s`}
          >
            <p className="t-meta text-muted-foreground mb-4">
              {String(i + 1).padStart(2, "0")} — {service.for}
            </p>
            <h3 className="t-h3 mb-3">{service.title}</h3>
            <p className="mb-5 max-w-lg">{service.summary}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 t-small mb-5">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-px w-3 shrink-0 bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="t-meta text-muted-foreground">
              See it in:{" "}
              <span className="text-foreground">{service.example}</span>
            </p>
          </article>
        ))}
      </div>

      <div className="mt-24">
        <p className="muted-text mb-6 fade-in">
          What clients noticed after launch
        </p>
        <ul className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl border overflow-hidden">
          {outcomes.map((o, i) => (
            <li key={o.title} className="p-7 bg-card">
              <span className="t-eyebrow text-primary block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h4 mb-2">{o.title}</h3>
              <p className="t-small">{o.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
