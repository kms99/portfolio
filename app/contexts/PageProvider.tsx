import { PropsWithChildren, createContext, useContext, useState } from "react";

const initialValue = {
  handleChangeNextPage: () => {},
  handleChangePrevPage: () => {},
  handleStartAnimating: () => {},
  handleEndAnimating: () => {},
  isActiveFirst: true,
};

const FIRST_PAGE = 1;

const PageContext = createContext(initialValue);

const nextPage = (prev: number) => prev + 1;
const prevPage = (prev: number) => prev - 1;

const PageProvider = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState<number>(1);
  const [isAnimating, setAnimating] = useState<boolean>(true);

  const changePage = (setter: (prev: number) => number) => {
    if (isAnimating) return;

    setPage(setter);
  };

  const handleChangeNextPage = () => changePage(nextPage);
  const handleChangePrevPage = () => changePage(prevPage);

  const handleStartAnimating = () => setAnimating(true);
  const handleEndAnimating = () => setAnimating(false);

  const isActiveFirst = page === FIRST_PAGE;

  const value = {
    handleChangeNextPage,
    handleChangePrevPage,
    handleStartAnimating,
    handleEndAnimating,
    isActiveFirst,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageProvider;

export const usePage = () => {
  return useContext(PageContext);
};
