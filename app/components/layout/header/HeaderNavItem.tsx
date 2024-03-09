import React from 'react';
import { NavItemsType } from '../layout.type';

interface Props {
  nav: NavItemsType;
}

export default function HeaderNavItem({ nav }: Props) {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <li className="[&:hover]:text-white [&+li]:ml-3">
      <a
        href={`#${nav.id.split('-')[1]}`}
        onClick={e => scrollToElement(e, nav.id.split('-')[1])}
        className="w-full h-full p-3 [&:hover]:bg-gray-700 font-main font-light"
      >
        {nav.text}
      </a>
    </li>
  );
}
