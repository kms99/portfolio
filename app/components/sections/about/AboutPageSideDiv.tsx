import useBook from '@/app/hooks/useBook';
import { BookMode } from '@/app/types/enums';
import React, { PropsWithChildren } from 'react';

interface Props {
  $style: string;
  mode: BookMode;
}

export default function AboutPageSideDiv({ children, $style, mode }: PropsWithChildren<Props>) {
  const { changePage } = useBook();

  const handleChangePage = (e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // [fix]: 이전에 링크 클릭시 이벤트 버블링이 적용되어 changePage 함수가 실행되면서 애니메이션 동장
    // [how]: link 태그에만 dataset을 주어 link가 클릭 되었다는 것을 알림
    // [fix]: 이벤트 버블링 시 dataset을 통해 링크가 클릭되면 이벤트 실행 x
    if (target.dataset.type === 'link') return;

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
          handleChangePage(e);
        }
      }}
    >
      {children}
    </div>
  );
}
