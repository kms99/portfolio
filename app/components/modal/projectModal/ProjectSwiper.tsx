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
    <div className="w-3/5">
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
        className="w-full h-full"
      >
        {imgList?.map(imgInfo => {
          return (
            <SwiperSlide key={imgInfo.id}>
              <Image
                src={imgInfo.url}
                alt="프로젝트 프리뷰"
                width={600}
                height={300}
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev text-black" />
        <div className="swiper-button-next text-black" />

        <div className="swiper-pagination mt-10 relative" />
      </Swiper>
    </div>
  );
}
