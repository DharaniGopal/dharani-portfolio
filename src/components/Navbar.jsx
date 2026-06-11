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

    sections.forEach((section) => observer.observe(section));

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
        dark:bg-black/30

        backdrop-blur-xl

        border-b
        border-black/10
        dark:border-white/10

        transition-all
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
            text-xl
            font-bold

            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-blue-500

            bg-clip-text
            text-transparent
          "
        >
          Dharani.
        </a>

        {/* Nav Links */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                relative
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  activeSection === link.id
                    ? "text-purple-500"
                    : `
                      text-gray-700
                      dark:text-gray-300

                      hover:text-purple-500
                    `
                }
              `}
            >
              {link.label}

              {activeSection === link.id && (
                <span
                  className="
                    absolute
                    left-0
                    -bottom-2

                    w-full
                    h-[2px]

                    bg-purple-500
                    rounded-full
                  "
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
