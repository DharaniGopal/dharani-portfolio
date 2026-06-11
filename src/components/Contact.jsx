import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-10 text-center">
      <SectionTitle title="Let's Connect" />

      <p className="text-gray-400 mb-12">
        Interested in collaborating, discussing frontend development, React
        architecture, or exciting product opportunities?
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Email */}

        <a
          href="mailto:dharanigl1008@gmail.com"
          className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            bg-purple-600
            hover:bg-purple-700
            transition
          "
        >
          <FaEnvelope />
          Email Me
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/dharanigopal/"
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            border 
          border-black/10
          dark:border-white/10
            hover:border-blue-500
            transition
          "
        >
          <FaLinkedin />
          LinkedIn
        </a>

        {/* GitHub */}

        <a
          href="https://github.com/DharaniGopal"
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            border
          border-black/10
          dark:border-white/10
            hover:border-gray-400
            transition
          "
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      {/* <div className="mt-12 text-gray-500">Chennai, Tamil Nadu, India 🇮🇳</div> */}
    </section>
  );
}

export default Contact;
