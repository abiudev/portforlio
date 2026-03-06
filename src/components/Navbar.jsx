import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "technologies" },
  { label: "Projects", id: "projects" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <button onClick={() => scrollToSection("about")} className="site-logo">
          {"// ABIUD.DEV"}
        </button>

        <div className="site-nav__desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          <a href="/AM.pdf" download className="btn-ghost">
            Resume
          </a>
        </div>

        <button
          className="site-nav__toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="site-nav__mobile">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link nav-link--mobile"
            >
              {link.label}
            </button>
          ))}
          <a href="/AM.pdf" download className="btn-ghost">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
