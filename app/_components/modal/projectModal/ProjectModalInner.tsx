'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectDetailType } from '@/app/_types/enums';
import { Close } from '@/public/assets/project';
import useModal from '@/app/_hooks/useModal';
import useProject from '@/app/_hooks/supabase/useProject';
import ProjectSwiper from './ProjectSwiper';
import ProjectInfo from './ProjectInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectDetailList from './ProjectDetailList';
import ProjectDetailButton from './ProjectDetailButton';

export default function ProjectModalInner() {
  const { projectState, closeProject } = useModal();

  const { data } = useProject(projectState.selectProject!);

  // TODO: 컴포넌트 분리
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white cursor-default w-[80%] desktop:w-3/5 h-3/4 p-6 box-content font-main min-w-[600px]">
      <button
        type="button"
        aria-label="모달 닫기"
        onClick={closeProject}
        className="absolute top-5 right-5 cursor-pointer  p-2 z-20"
      >
        <Close />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={false}
        allowTouchMove={false}
        navigation={{ nextEl: '.swiper-button-next-contribute', prevEl: '.swiper-button-prev-contribute' }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="flex items-center gap-5 p-5 content-around w-full h-full flex-col desktop:flex-row">
            {data?.project_img && <ProjectSwiper imgList={data.project_img} />}
            <ProjectInfo projectData={data!} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full overflow-y-scroll p-5">
            <ProjectDetailButton text="돌아가기" className="swiper-button-prev-contribute" />
            <div className="mt-5">
              <h2 className="font-bold text-2xl mb-5">역할 및 개발내용</h2>
              <p className="whitespace-pre-wrap font-sub font-bold">{data?.role}</p>
            </div>
            <ProjectDetailList data={data?.contribute ?? []} mode={ProjectDetailType.CONTRIBUTE} />
            <ProjectDetailList data={data?.trouble_shooting ?? []} mode={ProjectDetailType.TROUBLE} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
