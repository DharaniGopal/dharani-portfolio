import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
      bg-white/80
      dark:bg-black/20
        backdrop-blur-lg
        border-b
      border-gray-200
      dark:border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`
              transition-all duration-300
              ${
                activeSection === link.id
                  ? "text-purple-400 font-semibold"
                  : "text-gray-400 hover:text-gray-900 dark:text-white"
              }
            `}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
