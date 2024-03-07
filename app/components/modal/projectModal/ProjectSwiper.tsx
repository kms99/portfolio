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
    <div>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        mousewheel
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        className="w-40rem h-auto"
      >
        {imgList?.map(imgInfo => (
          <SwiperSlide key={imgInfo.id}>
            <Image
              src={imgInfo.url}
              alt="sdf"
              width={600}
              height={300}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev text-black" />
        <div className="swiper-button-next text-black" />

        <div className="swiper-pagination mt-10 relative" />
      </Swiper>
    </div>
  );
}
