import { projectModalState } from '@/app/states/atoms';
import React, { PropsWithChildren } from 'react';
import { useSetRecoilState } from 'recoil';

export default function Backdrop({ children }: PropsWithChildren) {
  const setCloseModal = useSetRecoilState(projectModalState);
  const handleClose = () => {
    const resetProjectState = { selectProject: null, isOpen: false };
    setCloseModal(resetProjectState);
  };
  return (
    <div
      className="z-50 fixed left-0 top-0 w-screen h-screen bg-black opacity-30"
      role="button"
      onClick={handleClose}
      onKeyDown={e => {
        if (e.key === 'Enter') handleClose();
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
