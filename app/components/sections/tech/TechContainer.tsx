import Image from 'next/image';
import React from 'react';
import { Tech } from './constants';

interface Props {
  title: string;
}

function TechContainer({ title }: Props) {
  return (
    <section className="mx-3 flex flex-col items-center transition-all relative hover:scale-105">
      <h1 className="text-lg self-start mb-2 font-bold">{title}</h1>

      <ul className="h-full px-5 py-3 grid grid-cols-5 gap-2 bg-gray-300 rounded-lg transition-all w-full">
        {Tech[title].map(tech => (
          <li key={tech.title} className="py-3 flex flex-col items-center px-1 justify-end h-full">
            <Image
              src={tech.img}
              width={40}
              height={40}
              alt={`${tech.title}image`}
              style={{ width: 'auto' }}
              className="justify-self-center mb-2"
            />
            <span className="text-sm font-bold text-center">{tech.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechContainer;
