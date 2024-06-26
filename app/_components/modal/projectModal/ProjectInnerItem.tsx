import { ProjectItemType } from '@/app/_types/enums';
import Link from 'next/link';
import React from 'react';
import { Tables } from '@/app/_utils/supabase/supabase.type';
import ProjectTechTag from '../../common/ProjectTechTag';

interface Props {
  title: string;
  mode: ProjectItemType;
  text: string | Tables<'front_tech'>[] | Tables<'back_tech'>[] | Tables<'library'>[] | undefined;
}

export default function ProjectInnerItem({ title, mode, text }: Props) {
  const currentMode = (
    itemMode: ProjectItemType,
    itemText: string | Tables<'front_tech'>[] | Tables<'back_tech'>[] | Tables<'library'>[] | undefined,
  ) => {
    switch (itemMode) {
      case ProjectItemType.LINK:
        if (typeof itemText === 'string') {
          return (
            <Link
              href={itemText}
              className="[&:hover]:underline  font-sub font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {itemText}
            </Link>
          );
        }
        return <p />;

      case ProjectItemType.TAG:
        if (typeof itemText === 'object') {
          return (
            <div className="flex flex-wrap gap-1  font-sub font-bold">
              {itemText.map(item => (
                <ProjectTechTag key={item.tech_title} techText={item.tech_title} />
              ))}
            </div>
          );
        }
        return <p />;

      default:
        if (typeof itemText === 'string') {
          return <p className="whitespace-pre-wrap break-keep  font-sub font-bold">{itemText}</p>;
        }
        return <p />;
    }
  };
  return (
    <div className="py-2 [&+div]:border-t-2 [&+div]:border-slate-800 break-all w-full">
      <h2 className="font-bold text-lg">{title}</h2>
      {currentMode(mode, text)}
    </div>
  );
}
