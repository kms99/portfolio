import React from 'react';
import { BookMode } from '@/app/types/enums';
import AboutPageSideDiv from '../AboutPageSideDiv';

export default function SecondPageFront() {
  return (
    <AboutPageSideDiv
      mode={BookMode.NEXT}
      $style="flex flex-col justify-center whitespace-pre-wrap break-all top-0 left-0 w-full h-full absolute z-20 px-10 shadow-AboutCardShadow bg-white"
    >
      <h3 className=" text-3xl mt-5 mb-8 inline-block w-fit font-bold">정진하는 개발자</h3>
      <p className="text-base whitespace-pre-wrap tracking-wider leading-8 [&>span]:font-bold [&>span]:text-xl font-sub">
        웹 프론트엔드(FE) 개발자 <span>김명섭</span> 입니다.
        <br />
        <br />
        <span>지속적인 학습과 프로젝트</span> 를 통해
        <br />
        기술적역량을 강화하고 있으며,
        <br />
        배운 내용을 <span>기록하고 공유</span> 하고 있습니다.
        <br />
        <br />
        <span>주도적으로 목표를 설정</span> 하며,
        <br />그 목표를 달성하기 위해 매일 <span>정진</span> 합니다.
      </p>
    </AboutPageSideDiv>
  );
}
