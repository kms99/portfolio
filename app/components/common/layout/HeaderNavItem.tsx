import Link from 'next/link';
import React from 'react';
import { NavItemsType } from './layout.type';

interface Props {
  nav: NavItemsType;
}

export default function HeaderNavItem({ nav }: Props) {
  return (
    <li className="[&:hover]:text-white [&+li]:ml-3 ">
      <Link
        href={`#${nav.id.split('-')[1]}`}
        className="w-full h-full p-3 [&:hover]:bg-gray-700"
      >
        {nav.text}
      </Link>
    </li>
  );
}
