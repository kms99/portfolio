'use client';

import useProject from '@/app/hooks/supabase/useProject';
import useModal from '@/app/hooks/useModal';
import React from 'react';
import ProjectSwiper from './ProjectSwiper';
import ProjectDetailInfo from './ProjectDetailInfo';

export default function ProjectModalInner() {
  const { projectState } = useModal();

  const { data } = useProject(projectState.selectProject!);

  // TODO: 컴포넌트 분리
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 cursor-default">
      <div className="flex items-center gap-5 p-5 ">
        <ProjectSwiper imgList={data?.project_img ?? []} />
        <ProjectDetailInfo projectData={data!} />
      </div>
      <button type="button">자세히 보기</button>
    </div>
  );
}
