import Image from 'next/image';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { projectModalState } from '@/app/states/atoms';
import { Project } from './project.type';
import ProjectTechTag from './ProjectTechTag';

interface Props {
  project: Project;
}
export default function ProjectCard({ project }: Props) {
  const setModalState = useSetRecoilState(projectModalState);

  const handleClickProject = () => {
    const newProjectModalState = { selectProject: project.title, isOpen: true };
    setModalState(newProjectModalState);
  };
  return (
    <li className="flex flex-col items-center [&:hover]:scale-105 transition-all cursor-pointer">
      <button type="button" onClick={handleClickProject}>
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
      </button>
    </li>
  );
}
