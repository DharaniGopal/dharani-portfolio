import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center"
    >
      <SectionTitle title="Let's Connect" />

      <p className="text-gray-400 mb-8">
        Interested in collaborating or discussing
        frontend development opportunities?
      </p>

      <a
        href="mailto:dharanigopal100897@gmail.com"
        className="
          inline-block
          px-8
          py-4
          rounded-full
          bg-purple-600
          hover:bg-purple-700
          transition
        "
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;