import type { NextPage } from "next";
import Image from "next/image";

import Project from "./Project";

const Projects: NextPage = () => {
  return (
    <div className="font-poppins mx-24 my-10 font-medium">
      <p className="font-semibold text-blue-600 text-2xl">/projects</p>

      <div className="flex flex-row items-center">
        <div>
          <Project
            title="Gradient Deck - Find Awesome Gradients"
            desc="A curated place to find awesome gradients!"
            role="owner"
            url="https://github.com/kr-anurag/gradient-deck"
          />

          <Project
            title="Orbits UI"
            desc="Orbits UI is a React Component Library."
            url="https://github.com/avneesh0612/Orbits-UI"
            role="contributor"
          />

          <Project
            title="Formie [WIP]"
            desc="Formie - Open Source Forms"
            url="https://github.com/kr-anurag/formie"
            role="owner"
          />

          <p className="text-gray-700">- and yep! more coming up soon!</p>
        </div>

        <div>
          <Image
            src="/assests/projects.svg"
            alt="projects"
            height="200px"
            width="250px"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;