import AboutCard from "../components/about-card";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="lg:grid grid-cols-6 gap-8">
        <div className="heading col-span-2 reveal">
          <p className="title fade-in">About</p>
          <h2
            className="fade-in-up text-3xl md:text-4xl font-bold text-foreground mb-16"
            data-reveal-delay="0.06s"
          >
            <span className="font-display">A</span> bit about me
          </h2>
        </div>
        <div className="text col-span-4 reveal" data-reveal-delay="0.1s">
          <div className="mb-10 text-lg">
            <p className="mb-8 fade-in-up" data-reveal-delay="0.14s">
              I’m Abdulmaleek, a self-taught frontend developer based in
              Nigeria. Over the past few years, I’ve been consistently learning
              and building on the web, going from the basics to creating full
              projects using HTML, CSS, JavaScript, and React. Along the way,
              I’ve worked with tools like Tailwind and Sass, focusing on
              building modern, responsive interfaces that work well across
              different devices.
            </p>
            <p className="fade-in-up" data-reveal-delay="0.2s">
              I pay attention to the details that make a difference, making sure
              things feel smooth, load fast, and are easy to use. I care about
              writing clean, maintainable code and improving how I structure my
              projects. I’m always learning, refining my skills, and looking for
              ways to build better user experiences with everything I create.
            </p>
          </div>
          <div className="journey mb-30 reveal" data-reveal-delay="0.26s">
            <p className="muted-text !text-xs mb-8">My Journey</p>
            <div className="items">
              <div className="item">
                <p>2025 — Now</p>
                <div>
                  <h4>Building full apps with React</h4>
                  <p>React, APIs, Tailwind, Sass</p>
                </div>
              </div>
              <div className="item">
                <p>2024 — 2025</p>
                <div>
                  <h4>Started the journey</h4>
                  <p>HTML, CSS, JavaScript fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="reveal" data-reveal-delay="0.1s">
          <AboutCard
            id={1}
            text1="Clean Code"
            text2="Writing maintainable, well-tested code that future-me will thank present-me for."
          />
        </div>
        <div className="reveal" data-reveal-delay="0.16s">
          <AboutCard
            id={2}
            text1="Design Eye"
            text2="Obsessing over spacing, color, and typography until every pixel sings."
          />
        </div>
        <div className="reveal" data-reveal-delay="0.22s">
          <AboutCard
            id={3}
            text1="Performance"
            text2={`If it's not fast, it's not finished. Core Web Vitals are non-negotiable.`}
          />
        </div>
        <div className="reveal" data-reveal-delay="0.28s">
          <AboutCard
            id={4}
            text1="Accessibility"
            text2="Building for everyone — screen readers, keyboard nav, reduced motion, all of it."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
