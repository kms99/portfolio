import { useRecoilState } from 'recoil';
import { bookPageState } from '../states/recoil/atoms';
import { BookMode } from '../types/enums';

export default function useBook() {
  const [page, setPage] = useRecoilState(bookPageState);

  const MAX_PAGE = 4;

  const changePage = (mode: BookMode) => {
    if (mode === BookMode.PREV) {
      if (page === 0) return;
      setPage(page - 1);
    } else {
      if (page === MAX_PAGE - 1) return;
      setPage(page + 1);
    }
  };

  return { page, changePage };
}
