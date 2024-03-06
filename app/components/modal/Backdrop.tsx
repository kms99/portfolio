import useModal from '@/app/hooks/useModal';
import React, { PropsWithChildren } from 'react';

export default function Backdrop({ children }: PropsWithChildren) {
  const { closeProject } = useModal();
  return (
    <div
      className="z-50 fixed left-0 top-0 w-screen h-screen backdrop-blur-sm"
      role="button"
      onClick={closeProject}
      onKeyDown={e => {
        if (e.key === 'Enter') closeProject();
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
