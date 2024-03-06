import Image from 'next/image';
import React from 'react';
import { Project } from './project.type';
import ProjectTechTag from './ProjectTechTag';

interface Props {
  project: Project;
}
export default function ProjectCard({ project }: Props) {
  return (
    <li className="flex flex-col items-center [&:hover]:scale-105 transition-all cursor-pointer">
      <figure className="w-30rem h-60 relative">
        <Image src={project.previewSrc} alt="dfs" className="mb-3 relative w-full h-full object-cover" />
      </figure>
      <div className="w-full">
        <span className="text-sm text-gray-700 ">{project.duration}</span>
        <h2 className="text-xl font-bold">{project.title}</h2>
        <span className="text-base">{project.detail}</span>
        <section className="flex mt-3">
          {project.techs.map(tech => (
            <ProjectTechTag key={tech} techText={tech} />
          ))}
        </section>
      </div>
    </li>
  );
}
