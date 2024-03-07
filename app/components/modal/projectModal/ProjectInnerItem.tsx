import { ProjectItemType } from '@/app/types/enums';
import { Tables } from '@/app/utils/supabase/supabase.type';
import Link from 'next/link';
import React from 'react';
import ProjectTechTag from '../../common/ProjectTechTag';

interface Props {
  title: string;
  mode: ProjectItemType;
  text: string | Tables<'front_tech'>[] | Tables<'back_tech'>[] | undefined;
}

export default function ProjectInnerItem({ title, mode, text }: Props) {
  const currentMode = (
    itemMode: ProjectItemType,
    itemText: string | Tables<'front_tech'>[] | Tables<'back_tech'>[] | undefined,
  ) => {
    switch (itemMode) {
      case ProjectItemType.link:
        if (typeof itemText === 'string') {
          return <Link href={itemText}>{itemText}</Link>;
        }
        return <p />;

      case ProjectItemType.tag:
        if (typeof itemText === 'object') {
          return (
            <div>
              {itemText.map(item => (
                <ProjectTechTag key={item.tech_title} techText={item.tech_title} />
              ))}
            </div>
          );
        }
        return <p />;

      default:
        if (typeof itemText === 'string') {
          return <p>{itemText}</p>;
        }
        return <p />;
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      {currentMode(mode, text)}
    </div>
  );
}
