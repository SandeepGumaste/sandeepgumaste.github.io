import { FaGithub, FaFreeCodeCamp, FaHackerrank } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Contact = () => {
  return (
    <section className="px-5 flex flex-col pb-10 text-gray-800">
      <h1 className="text-3xl sm:text-5xl font-semibold pb-5">Get in touch</h1>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl">
          Ready to create something together?
        </h2>
        <a
          href="mailto:sandeepgumaste10@gmail.com"
          className="text-blue-900 text-opacity-80 font-semibold text-2xl hover:opacity-80"
        >
          Let's chat
        </a>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold py-5">
          Find me elsewhere
        </h2>
        <div className=" flex text-6xl">
          <a
            href="https://github.com/SandeepGumaste"
            className="mr-5 hover:text-blue-900 hover:opacity-80"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.freecodecamp.org/sandeepp"
            className="mr-5 hover:text-blue-900 hover:opacity-80"
          >
            <FaFreeCodeCamp />
          </a>
          <a
            href="https://www.hackerrank.com/sandeepgumaste10"
            className="mr-5 hover:text-blue-900 hover:opacity-80"
          >
            <FaHackerrank />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/SandeepGumaste"
            className=" hover:text-blue-900 hover:opacity-80"
          >
            <SiFrontendmentor />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
