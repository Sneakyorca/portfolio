const Footer = () => {
  return (
    <footer className="py-8 flex flex-col md:flex-row justify-between items-center border-t border-secondary px-6 md:px-12 lg:px-20 mb-0 text-sm gap-4 md:gap-0">
      <p>&copy; 2026 Abdulmaleek. Built with care</p>
      <div className="flex items-center gap-6">
        {" "}
        <p className="ml-auto">Designed & developed by me</p>
        <a
          href="#hero"
          className="p-2 px-3 bg-secondary inline-block rounded-full hover:bg-primary hover:text-background active:bg-primary active:text-background transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.8"
            className="size-3 inline-block rotate-180"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
