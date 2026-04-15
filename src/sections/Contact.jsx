const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="section flex justify-between flex-1 flex-col lg:flex-row gap-24"
      >
        <main className="w-full">
          <p className="title">CONTACT</p>
          <h1 className="text-4xl md:text-5xl w-full lg:text-6xl font-display font-bold text-foreground mb-8">
            Let's work together<span className="text-primary">.</span>
          </h1>
          <p className="mb-6 text-lg">
            I'm currently open to freelance projects and full-time roles. If you
            have an idea, a project, or just want to say hi? Drop me a line.
          </p>
          <p>
            Based in{" "}
            <span className="font-semibold text-foreground">
              Lagos, Nigeria.{" "}
            </span>
            Open to remote worldwide.
          </p>
        </main>
        <aside className="w-full flex flex-col gap-3">
          <Socials
            info={{
              link: "github.com/Sneakyorca",
              icon: "",
              platform: "GitHub",
              username: "@sneakyorca",
              id: 1,
            }}
          />
          <Socials
            info={{
              link: "linkedin.com/in/abdulmaleek-odetunde-95b00a366",
              icon: "",
              platform: "LinkedIn",
              username: "abdulmaleekodetunde",
              id: 2,
            }}
          />
          <Socials
            info={{
              link: "x.com/sneakyorca",
              icon: "",
              platform: "X",
              username: "@sneakyorca",
              id: 3,
            }}
          />
          <Socials
            info={{
              link: "mailto:abdulmaleek.odetunde.dev@gmail.com",
              icon: "",
              platform: "Email",
              username: "abdulmaleek.odetunde.dev@gmail.com",
              id: 4,
            }}
          />
        </aside>
      </section>
    </>
  );
};
const Socials = ({ info }) => {
  return (
    <a
      href={info.link}
      target="_blank"
      className="bg-card/30 hover:bg-card  border p-4 flex justify-between items-center rounded-xl group"
    >
      <span className="inline-block p-3 rounded-full bg-secondary/50 mr-4 text-gray-500 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
        {info.id == 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M5.851 3.001c.214-.006.492.012.835.085c.384.081.848.23 1.399.483c.355.164.748.373 1.179.637a12.9 12.9 0 0 1 5.738 0a11 11 0 0 1 1.268-.677c.724-.325 1.294-.463 1.723-.51a3 3 0 0 1 .553-.01a2 2 0 0 1 .285.046l.013.004l.006.001l.003.001h.002s.001.001-.277.962l.278-.96a1 1 0 0 1 .638.558a5.22 5.22 0 0 1 .283 3.37c.928 1.21 1.297 2.77 1.21 4.244c-.097 1.673-.789 3.386-2.123 4.505c-.859.72-1.88 1.122-2.888 1.356c.168.483.237.995.201 1.506V21a1 1 0 1 1-2 0v-2.435q0-.04.004-.08c.02-.26-.015-.522-.106-.768a1.85 1.85 0 0 0-.425-.663a1 1 0 0 1 .601-1.7c1.329-.144 2.498-.45 3.328-1.146c.827-.694 1.34-1.845 1.412-3.09c.073-1.243-.302-2.43-1.05-3.197a1 1 0 0 1-.218-1.055a3.2 3.2 0 0 0 .146-1.794c-.198.05-.457.137-.781.282a10 10 0 0 0-1.363.762a1 1 0 0 1-.803.13a10.9 10.9 0 0 0-5.578 0a1 1 0 0 1-.803-.13a10 10 0 0 0-1.294-.73a5 5 0 0 0-.85-.314a3.2 3.2 0 0 0 .146 1.794a1 1 0 0 1-.218 1.055c-.706.725-1.08 1.82-1.058 2.992s.438 2.293 1.145 3.037c.837.88 2.12 1.25 3.615 1.432a1 1 0 0 1 .59 1.697a1.85 1.85 0 0 0-.422.655c-.09.244-.127.502-.109.759l.003.072V21a1 1 0 1 1-2 0v-.462c-.653.083-1.237.06-1.765-.06c-.864-.198-1.483-.634-1.957-1.096a8 8 0 0 1-.597-.664l-.16-.198a12 12 0 0 0-.29-.35c-.279-.32-.433-.412-.557-.442a1 1 0 1 1 .474-1.943c.746.182 1.244.673 1.59 1.07c.123.14.251.3.366.442l.125.154c.154.189.296.354.446.5c.288.28.593.482 1.006.576c.31.071.732.093 1.314-.01a3.8 3.8 0 0 1 .211-1.409c-1.185-.283-2.393-.793-3.332-1.78c-1.11-1.167-1.666-2.797-1.695-4.378c-.026-1.383.351-2.824 1.221-3.958a5.2 5.2 0 0 1 .283-3.371a1 1 0 0 1 .638-.559l.278.96l-.278-.96h.003l.004-.002l.008-.002l.018-.005a1 1 0 0 1 .137-.028a2 2 0 0 1 .271-.024"
              className="Vector (Stroke)"
              clipRule="evenodd"
            />
          </svg>
        ) : info.id == 2 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLineCap="round"
            strokeLineJoin="round"
            style={{ opacity: 1 }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ) : info.id == 3 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-twitter-x size-3.5"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="size-4"
            strokeWidth="1.5"
            strokeLineCap="round"
            strokeLineJoin="round"
            style={{ opacity: 1 }}
          >
            <path
              fill="none"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        )}
      </span>
      <div className="flex flex-col mr-auto">
        <span className="text-sm text-foreground font-semibold font-display">
          {info.platform}
        </span>
        <span className="text-xs">{info.username}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        className="size-3.5 opacity-50 inline-block rotate-225 justify-self-end group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 group-hover:text-primary group-hover:opacity-100"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};
export default Contact;
