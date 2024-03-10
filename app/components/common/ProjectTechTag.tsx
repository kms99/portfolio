import React from 'react';

interface Props {
  techText: string;
}
export default function ProjectTechTag({ techText }: Props) {
  return (
    <span className="bg-gray-200 text-sm rounded-full px-2 py-1 whitespace-nowrap font-sub font-bold">{techText}</span>
  );
}
