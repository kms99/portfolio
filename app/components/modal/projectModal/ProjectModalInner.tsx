'use client';

import useProject from '@/app/hooks/supabase/useProject';
import useModal from '@/app/hooks/useModal';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectDetailType } from '@/app/types/enums';
import { Close } from '@/public/assets/project';
import ProjectSwiper from './ProjectSwiper';
import ProjectInfo from './ProjectInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectDetailList from './ProjectDetailList';

export default function ProjectModalInner() {
  const { projectState, closeProject } = useModal();

  const { data } = useProject(projectState.selectProject!);

  // TODO: 컴포넌트 분리
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 cursor-default w-3/5 h-3/4 p-6 box-content">
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
          <div className="flex items-center gap-5 p-5 content-around w-full h-full">
            {data?.project_img && <ProjectSwiper imgList={data.project_img} />}
            <ProjectInfo projectData={data!} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full overflow-y-scroll p-5">
            <button
              type="button"
              className="swiper-button-prev-contribute mb-10 self-end bg-white rounded-md px-3 py-1 mt-3 font-bold"
            >
              돌아가기
            </button>
            <div>
              <h2 className="font-bold text-2xl">역할 및 개발내용</h2>
              <p className="whitespace-pre-wrap">{data?.role}</p>
            </div>
            <ProjectDetailList data={data?.contribute ?? []} mode={ProjectDetailType.CONTRIBUTE} />
            <ProjectDetailList data={data?.trouble_shooting ?? []} mode={ProjectDetailType.TROUBLE} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
