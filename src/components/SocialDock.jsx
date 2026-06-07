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
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://linkedin.com/in/dharanigopal"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={22} />
      </a>

      <a href="mailto:dharanigopal100897@gmail.com">
        <FaEnvelope size={22} />
      </a>
    </div>
  );
}

export default SocialDock;