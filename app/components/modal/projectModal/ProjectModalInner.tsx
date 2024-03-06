'use client';

import useProject from '@/app/hooks/supabase/useProject';
import useModal from '@/app/hooks/useModal';
import Link from 'next/link';
import React from 'react';

export default function ProjectModalInner() {
  const { projectState } = useModal();

  const { data } = useProject(projectState.selectProject!);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 cursor-default">
      <div>
        <div>스와이퍼</div>
        <div>
          <span>{data?.duration}</span>
          <h1>{data?.title}</h1>
          <p>{data?.sub_detail}</p>
          <section>
            <div>
              <h2>주요기능</h2>
              <p>{data?.main_feature}</p>
            </div>
            <div>
              <h2>URL</h2>
              <Link href={data?.url ? data?.url : '#'}>{data?.url}</Link>
            </div>
            <div>
              <h2>깃허브</h2>
              <Link href={data?.github ? data?.github : '#'}>{data?.github}</Link>
            </div>
            <div>
              <h2>FrontEnd</h2>
              <p>주요기능 설명</p>
            </div>
            <div>
              <h2>BackEnd</h2>
              <p>주요기능 설명</p>
            </div>
          </section>
        </div>
      </div>
      <button type="button">자세히 보기</button>
    </div>
  );
}
