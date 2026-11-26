const ARROW =
  "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z";

const Footer = () => {
  return (
    <footer className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
      <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 t-meta text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Abdulmaleek Odetunde</p>
        <div className="flex items-center gap-6">
          <p>Designed and built in Lagos</p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-2.5 inline-flex rounded-full bg-secondary text-foreground hover:bg-primary hover:text-background transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.8"
              className="size-3 rotate-180"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d={ARROW} clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
