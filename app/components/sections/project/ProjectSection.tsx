import React from 'react';
import SubTitle from '../../common/SubTitle';
import ProjectCard from './ProjectCard';
import { PROJECT_LISTS } from './constants';

export default function ProjectSection() {
  return (
    <section className="h-screen flex flex-col items-center relative" id="project">
      <SubTitle>프로젝트</SubTitle>
      <ul className="grid grid-cols-3 justify-items-center gap-8">
        {PROJECT_LISTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}
