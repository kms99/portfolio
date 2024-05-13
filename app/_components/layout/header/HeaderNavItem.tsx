import React from 'react';
import { scrollToElement } from '@/app/_utils/globalUtiles';
import { NavItemsType } from '../layout.type';

interface Props {
  nav: NavItemsType;
  handleMobileNavToggle: () => void;
}

export default function HeaderNavItem({ nav, handleMobileNavToggle }: Props) {
  return (
    <li className="hover:text-white w-full tablet:headerItemDesktop">
      <a
        href={`#${nav.id.split('-')[1]}`}
        onClick={e => {
          scrollToElement(e, nav.id.split('-')[1]);
          handleMobileNavToggle();
        }}
        className="w-full h-full inline-block text-center py-1 tablet:p-3 font-main font-light hover:bg-darkGray active:bg-darkGray"
      >
        {nav.text}
      </a>
    </li>
  );
}
