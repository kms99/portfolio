import useModal from '@/app/hooks/useModal';
import React, { PropsWithChildren } from 'react';

export default function Backdrop({ children }: PropsWithChildren) {
  const { closeProject } = useModal();
  const handleCloseProjectModal = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) closeProject();
  };
  return (
    <div
      className="z-50 fixed left-0 top-0 w-screen h-screen bg-backdrop backdrop-blur-sm "
      role="button"
      onClick={handleCloseProjectModal}
      onKeyDown={e => {
        if (e.key === 'Enter') handleCloseProjectModal(e);
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
