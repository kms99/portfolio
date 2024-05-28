import React, { PropsWithChildren } from 'react';
import TopButton from '../_components/layout/topButton/TopButton';
import Header from '../_components/layout/header/Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <TopButton />
    </div>
  );
}
