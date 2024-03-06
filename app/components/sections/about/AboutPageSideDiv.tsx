import { useBookContext } from '@/app/contexts/bookContext';
import { BookMode } from '@/app/types/enums';
import React, { PropsWithChildren } from 'react';

interface Props {
  $style: string;
  mode: BookMode;
}

export default function AboutPageSideDiv({ children, $style, mode }: PropsWithChildren<Props>) {
  const { changePage } = useBookContext();

  const handleChangePage = () => {
    changePage(mode);
  };

  return (
    <div
      className={$style}
      onClick={handleChangePage}
      role="button"
      aria-label="About page flip"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleChangePage();
        }
      }}
    >
      {children}
    </div>
  );
}
