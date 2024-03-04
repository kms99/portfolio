import { Down } from '@/public/assets/intro';
import React from 'react';

export default function DownBounce() {
  return (
    <section className="animate-bounce absolute bottom-32 flex flex-col items-center">
      <span className="mb-2 font-bold">내려주세요</span>
      <Down />
    </section>
  );
}
