import { useEffect, useState } from "react";
import WhatsAppIcon from "./whatsapp-icon";
import { WHATSAPP_URL } from "../data/content";

/**
 * Floating WhatsApp button. Appears once the visitor scrolls past the hero
 * and hides while the Contact section (which has its own WhatsApp link) is
 * on screen, so it never covers the form.
 */
const WhatsAppFloat = () => {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    let observer;
    if (contact) {
      observer = new IntersectionObserver(
        ([entry]) => setContactVisible(entry.isIntersecting),
        { rootMargin: "0px 0px -20% 0px" },
      );
      observer.observe(contact);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const shown = pastHero && !contactVisible;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
      className={`group fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-8 md:bottom-8 flex items-center gap-2 rounded-full bg-[#25D366] text-white p-3.5 md:pr-5 shadow-[0_10px_30px_-8px_rgb(0_0_0/0.45)] transition-all duration-500 ease-out hover:scale-105 ${
        shown
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden md:inline font-display font-semibold text-sm">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloat;
