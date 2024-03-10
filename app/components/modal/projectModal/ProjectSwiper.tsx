import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Tables } from '@/app/utils/supabase/supabase.type';
import Image from 'next/image';

interface Props {
  imgList: Tables<'project_img'>[];
}
export default function ProjectSwiper({ imgList }: Props) {
  return (
    <div className="w-3/5 relative">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        loop
        autoplay={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        mousewheel
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        initialSlide={0}
        className="w-full h-80 border-1"
      >
        {imgList?.map(imgInfo => {
          return (
            <SwiperSlide key={imgInfo.id}>
              <Image
                src={imgInfo.url}
                alt="프로젝트 프리뷰"
                width={600}
                height={300}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-5 relative flex justify-center">
        <div className="swiper-button-prev text-black scale-50" />
        <div className="swiper-pagination relative top-0 font-main z-0" />
        <div className="swiper-button-next text-black scale-50 " />
      </div>
    </div>
  );
}
