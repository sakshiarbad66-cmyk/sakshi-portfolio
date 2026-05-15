import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },

  // ✅ ADDED EXPERIENCE HERE
  { label: "Experience", href: "#experience" },

  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={handleLinkClick}>
        Sakshi Portfolio
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;