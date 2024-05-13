import React from 'react';
import SubTitle from '../../common/SubTitle';
import ProjectCard from './ProjectCard';
import { PROJECT_LISTS } from './constants';

export default function ProjectSection() {
  return (
    <section className="min-h-screen h-auto flex flex-col items-center relative" id="project">
      <SubTitle>프로젝트</SubTitle>
      <ul className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 justify-items-center gap-5">
        {PROJECT_LISTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}
