import { BookMode } from '@/app/_types/enums';
import React from 'react';
import { PageBtn } from '@/public/assets/about';

interface Props {
  mode: BookMode;
}
export default function PageNav({ mode }: Props) {
  switch (mode) {
    case BookMode.PREV:
      return (
        <span className="absolute bottom-2 left-2 font-sub font-bold flex items-center [&>svg]:mr-2">
          <PageBtn />
          이전 장
        </span>
      );
    case BookMode.NEXT:
      return (
        <span className="absolute bottom-2 right-2 font-sub font-bold  flex items-center [&>svg]:ml-2 [&>svg]:rotate-180">
          다음 장
          <PageBtn />
        </span>
      );
    default:
      return <div />;
  }
}
