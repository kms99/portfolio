import Image from 'next/image';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { projectModalState } from '@/app/states/recoil/atoms';
import { Project } from './project.type';
import ProjectTechTag from '../../common/ProjectTechTag';

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
    <li className="w-96 [&:hover]:scale-105 transition-all shadow-ProjectCardShadow p-2">
      <button type="button" onClick={handleClickProject} className="flex flex-col items-center w-full">
        <figure className="w-full h-60 relative mb-3 border-1">
          <Image src={project.previewSrc} alt="프로젝트 프리뷰" className="relative w-full h-full object-cover" />
        </figure>
        <div className="w-full flex flex-col items-start">
          <span className="text-sm text-gray-500 font-main">{project.duration}</span>
          <h2 className="text-2xl font-bold font-main">{project.title}</h2>
          <span className="text-base font-bold font-sub">{project.detail}</span>
          <section className="flex my-3 flex-wrap gap-1">
            {project.techs.map(tech => (
              <ProjectTechTag key={tech} techText={tech} />
            ))}
          </section>
        </div>
      </button>
    </li>
  );
}
