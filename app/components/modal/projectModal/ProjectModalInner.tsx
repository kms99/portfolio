'use client';

import useProject from '@/app/hooks/supabase/useProject';
import useModal from '@/app/hooks/useModal';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectDetailType } from '@/app/types/enums';
import ProjectSwiper from './ProjectSwiper';
import ProjectInfo from './ProjectInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectDetailList from './ProjectDetailList';

export default function ProjectModalInner() {
  const { projectState } = useModal();

  const { data } = useProject(projectState.selectProject!);

  // TODO: 컴포넌트 분리
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 cursor-default w-2/3 h-3/4 p-4 box-content">
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
            <ProjectSwiper imgList={data?.project_img ?? []} />
            <ProjectInfo projectData={data!} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-green-300 w-full h-full overflow-y-scroll">
            <button type="button" className="swiper-button-prev-contribute">
              돌아가기
            </button>
            <ProjectDetailList data={data?.contribute ?? []} mode={ProjectDetailType.CONTRIBUTE} />
            <ProjectDetailList data={data?.trouble_shooting ?? []} mode={ProjectDetailType.TROUBLE} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
