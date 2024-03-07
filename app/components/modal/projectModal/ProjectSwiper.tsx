import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={false}
        navigation
        pagination={{ clickable: true }}
        className="w-40rem h-80"
      >
        {imgList?.map(imgInfo => (
          <SwiperSlide key={imgInfo.id}>
            <Image src={imgInfo.url} alt="sdf" width={600} height={300} objectFit="cover" className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
