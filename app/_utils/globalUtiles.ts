export const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
