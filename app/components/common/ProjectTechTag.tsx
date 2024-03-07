import React from 'react';

interface Props {
  techText: string;
}
export default function ProjectTechTag({ techText }: Props) {
  return <span className="bg-gray-200 mr-2 text-sm rounded-full px-2 py-1">{techText}</span>;
}
