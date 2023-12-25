import Image from "next/image";
import React from "react";

const Tech: Record<string, Array<string>> = {
  Communication: ["figma", "git"],
  Backend: ["firebase", "supabase"],
  Frontend: [
    "HTML",
    "CSS",
    "styled-components",
    "tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "redux(toolkit)",
    "react-query",
  ],
};

type TechContainerProps = {
  title: string;
};

const TechContainer = ({ title }: TechContainerProps) => {
  return (
    <section
      className={`mx-3 flex flex-col items-center transition-all relative `}
    >
      <h1 className="text-lg self-start mb-2 font-bold">{title}</h1>

      <ul
        className={`h-full  px-5 py-3 grid grid-cols-5 gap-3 bg-gray-300 rounded-lg transition-all w-full`}
      >
        {Tech[title].map(tech => (
          <li className="[&:hover]:bg-gray-600 [&:hover]:text-white py-5 flex flex-col items-center px-2 justify-end h-full">
            <Image
              src={`/img/${tech}.png`}
              height={50}
              width={50}
              alt="tech image"
              className="justify-self-center mb-2"
            />
            <span className="text-sm font-bold">{tech}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechContainer;
