import React, { createContext, useContext, PropsWithChildren, useState, useMemo, useCallback } from 'react';
import { BookMode } from '../types/enums';

interface BookContextType {
  currentPage: number;
  changePage: (mode: BookMode) => void;
}

const initialState: BookContextType = {
  currentPage: 0,
  changePage: () => {},
};

export const BookContext = createContext<BookContextType>(initialState);

export default function BookProvider({ children }: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState<number>(initialState.currentPage);

  const MAX_PAGE = 4;

  const changePage = useCallback(
    (mode: BookMode) => {
      if (mode === BookMode.PREV) {
        if (currentPage === 0) return;
        setCurrentPage(currentPage - 1);
      } else {
        if (currentPage === MAX_PAGE - 1) return;
        setCurrentPage(currentPage + 1);
      }
    },
    [currentPage],
  );

  const value = useMemo(
    () => ({
      currentPage,
      changePage,
    }),
    [currentPage, changePage],
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export const useBookContext = () => useContext(BookContext);
