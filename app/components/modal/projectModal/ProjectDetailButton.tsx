import React from 'react';

interface Props {
  text: string;
  className: string;
}
export default function ProjectDetailButton({ text, className }: Props) {
  return (
    <button
      type="button"
      className={`${className} border-1 border-gray-500 rounded-md px-3 py-1  font-sub font-bold hover:bg-gray-500 hover:text-white`}
    >
      {text}
    </button>
  );
}
