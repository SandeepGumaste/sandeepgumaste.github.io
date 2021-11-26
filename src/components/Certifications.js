import React from "react";

const Certifications = () => {
  return (
    <section className="px-5 pb-10 text-gray-800">
      <h1 className="text-3xl sm:text-5xl font-semibold pb-5">
        Certifications
      </h1>
      <ul>
        <li className="pb-3">
          <a
            href="https://www.freecodecamp.org/certification/sandeepp/responsive-web-design"
            className="text-blue-900 text-opacity-80 font-semibold text-2xl hover:opacity-80"
          >
            Responsive Web Design
          </a>
        </li>
        <li className="pb-3">
          <a
            href="https://www.freecodecamp.org/certification/sandeepp/javascript-algorithms-and-data-structures"
            className="text-blue-900 text-opacity-80 font-semibold text-2xl hover:opacity-80"
          >
            JavaScript Algorithms and Data Structures
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/sandeepp/scientific-computing-with-python-v7"
            className="text-blue-900 text-opacity-80 font-semibold text-2xl hover:opacity-80"
          >
            Scientific Computing with Python
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
