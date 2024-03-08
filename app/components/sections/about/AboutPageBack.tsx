import React, { PropsWithChildren } from 'react';
import { BookMode } from '@/app/types/enums';
import AboutPageSideDiv from './AboutPageSideDiv';

interface Props {
  countTitle: string;
  title: string;
  detail: string;
}
export default function AboutPageBack({ children, countTitle, title, detail }: PropsWithChildren<Props>) {
  return (
    <AboutPageSideDiv
      mode={BookMode.PREV}
      $style="relative overflow-hidden top-0 left-0 w-full h-full  absolute flip z-10 bg-gray-100 border-r-2 flex flex-col items-center bg-gray-200"
    >
      <span className="mt-24 font-bold">{countTitle}</span>
      <h3 className="mt-10 text-3xl font-bold border-b-4 border-black mb-5">{title}</h3>
      <p className="text-sm text-gray-500">{detail}</p>
      {children}
    </AboutPageSideDiv>
  );
}
