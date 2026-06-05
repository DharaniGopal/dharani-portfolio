import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function SocialDock() {
  return (
    <div
      className="
        fixed
        left-6
        bottom-8
        hidden
        lg:flex
        flex-col
        gap-5
        z-50
      "
    >
      <a
        href="https://github.com/DharaniGopal"
        target="_blank"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="mailto:dharanigopal100897@gmail.com"
      >
        <FaEnvelope size={22} />
      </a>

      <div className="w-px h-20 bg-white/20 mx-auto" />
    </div>
  );
}

export default SocialDock;