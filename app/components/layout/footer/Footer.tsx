import { Blog, Github } from '@/public/assets/about';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 w-full h-52 flex flex-col items-center justify-center">
      <div>
        <ul className="flex gap-10">
          <li>
            <Link href="https://github.com/kms99" target="_blank" rel="noopener noreferrer">
              <Github className="scale-150" />
            </Link>
          </li>
          <li>
            <Link href="https://audtjqxx.tistory.com/" target="_blank" rel="noopener noreferrer">
              <Blog />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mt-5 text-sm">
        <span>E-mail: audtjq213@gmail.com</span>
        <span>Copyright © 2024. Kim MyungSub. All rights reserved.</span>
      </div>
    </footer>
  );
}
