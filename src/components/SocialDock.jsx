import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialDock() {
  return (
    <div
      className="
        fixed
        left-6
        bottom-8
        z-50
        flex
        flex-col
        gap-4
      "
    >
      <a
        href="https://github.com/DharaniGopal"
        target="_blank"
        rel="noreferrer"
        className="
          p-3
          rounded-full

          bg-white
          dark:bg-white/5

          border
          border-black/10
          dark:border-white/10

          text-gray-700
          dark:text-gray-300

          shadow-md
          dark:shadow-none

          hover:text-purple-500
          hover:border-purple-500/40
          hover:-translate-y-1

          transition-all
          duration-300
        "
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/in/dharanigopal"
        target="_blank"
        rel="noreferrer"
        className="
          p-3
          rounded-full

          bg-white
          dark:bg-white/5

          border
          border-black/10
          dark:border-white/10

          text-gray-700
          dark:text-gray-300

          shadow-md
          dark:shadow-none

          hover:text-blue-500
          hover:border-blue-500/40
          hover:-translate-y-1

          transition-all
          duration-300
        "
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:dharanigopal100897@gmail.com"
        className="
          p-3
          rounded-full

          bg-white
          dark:bg-white/5

          border
          border-black/10
          dark:border-white/10

          text-gray-700
          dark:text-gray-300

          shadow-md
          dark:shadow-none

          hover:text-purple-500
          hover:border-purple-500/40
          hover:-translate-y-1

          transition-all
          duration-300
        "
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
}

export default SocialDock;
