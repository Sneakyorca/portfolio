import MiniCard from "../components/mini-info-card";
import OutlinedButton from "../components/outlined-button";

const Hero = () => {
  return (
    <section id="hero" className="flex section items-center justify-between">
      {" "}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-fade-in" />
      <div
        className="absolute bottom-20 left-[5%] w-56 h-56 bg-primary/5 rounded-full blur-[80px] animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      />{" "}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_40%,transparent_100%)]" />
      <main>
        <div
          className="availability fade-in-up flex items-center tracking-widest gap-2 mb-8 text-sm"
          data-reveal-delay="0.05s"
        >
          <div className="relative flex items-center justify-center ">
            <span className="p-1 bg-green-400 rounded-full "></span>
            <span className="p-1 bg-green-400 rounded-full ripple absolute"></span>
          </div>{" "}
          AVAILABLE FOR WORK
        </div>
        <h1
          className="fade-in-up whitespace-normal font-display font-bold lg:text-8xl text-foreground mb-8 tracking-tight md:text-7xl text-5xl"
          data-reveal-delay="0.12s"
        >
          I craft <br />
          <span className="text-gradient">interfaces</span>
          <br /> that feel alive
        </h1>
        <p
          className="fade-in text-lg mb-7 max-w-full md:max-w-170 md:pr-30"
          data-reveal-delay="0.2s"
        >
          Self-taught frontend developer focused on creating fast, accessible,
          and visually compelling web experiences.
        </p>
        <div
          className="fade-in flex gap-4 font-display mb-12 font-semibold text-sm"
          data-reveal-delay="0.28s"
        >
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground dark:text-background hover:shadow-lg hover:shadow-primary/25 active:shadow-lg active:shadow-primary/25 transition-all duration-300">
            <a href="#work" className="flex items-center gap-2">
              View my work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </button>
          <button className="px-6 py-3 rounded-full text-foreground border hover:bg-muted/50 active:bg-muted/50 transition-all duration-300">
            <a href="#contact">Get in touch</a>
          </button>
        </div>
        <div className="fade-in" data-reveal-delay="0.34s">
          <p className="muted-text mb-2">CURRENTLY WORKING WITH</p>
          <div className="group flex gap-2 flex-wrap text-xs">
            <OutlinedButton text="HTML" />
            <OutlinedButton text="CSS" />
            <OutlinedButton text="JavaScript" />
            <OutlinedButton text="React" />
            <OutlinedButton text="Tailwind" />
            <OutlinedButton text="Sass" />
          </div>
        </div>
        <a
          href="#about"
          className="fade-in text-sm w-full text-nowrap mt-16 flex items-center hover:text-foreground active:text-foreground dark:hover:text-foreground dark:active:text-foreground"
          data-reveal-delay="0.42s"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
            className="size-3.5 inline-block animate-bounce mr-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          Scroll to explore
        </a>
      </main>
      <aside
        className="hidden lg:block slide-in-right"
        data-reveal-delay="0.2s"
      >
        <MiniCard id={1} text1={`2+`} text2={`Years in deep code`} />
        <MiniCard id={2} text1={`100%`} text2={`Self-taught and loving it`} />
        <MiniCard id={3} text2={`Cups of coffee consumed`} />
      </aside>
    </section>
  );
};

export default Hero;
