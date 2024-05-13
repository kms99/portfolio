'use client';

import React, { useEffect } from 'react';
import Backdrop from '../Backdrop';
import ProjectModalInner from './ProjectModalInner';

export default function ProjectModal() {
  useEffect(() => {
    // 모달이 마운트될 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트될 때 원래대로 복원
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <Backdrop>
      <ProjectModalInner />
    </Backdrop>
  );
}
