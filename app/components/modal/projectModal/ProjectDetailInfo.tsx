import { ProjectItemType } from '@/app/types/enums';
import React from 'react';
import { Project } from '@/app/utils/supabase/supabaseJoin.type';
import ProjectInnerItem from './ProjectInnerItem';

interface Props {
  projectData: Project;
}

export default function ProjectDetailInfo({ projectData }: Props) {
  const innerSectionList = [
    {
      title: '주요기능',
      mode: ProjectItemType.text,
      text: projectData?.main_feature,
    },
    {
      title: 'URL',
      mode: ProjectItemType.link,
      text: projectData?.url ? projectData?.url : '#',
    },
    {
      title: '깃허브',
      mode: ProjectItemType.link,
      text: projectData?.github ? projectData?.github : '#',
    },
    {
      title: 'FrontEnd',
      mode: ProjectItemType.tag,
      text: projectData?.front_tech,
    },
    {
      title: 'BackEnd',
      mode: ProjectItemType.tag,
      text: projectData?.back_tech,
    },
  ];
  return (
    <div>
      <span>{projectData?.duration}</span>
      <h1>{projectData?.title}</h1>
      <p>{projectData?.sub_detail}</p>
      <section>
        {innerSectionList.map(innerItem => (
          <ProjectInnerItem key={innerItem.title} title={innerItem.title} mode={innerItem.mode} text={innerItem.text} />
        ))}
      </section>
    </div>
  );
}
