import {
  css,
  figma,
  firebase,
  git,
  html,
  javascript,
  next,
  react,
  reactQuery,
  recoil,
  redux,
  styledComponents,
  supabase,
  tailwind,
  typescript,
  zustand,
} from '@/public/assets/tech';
import { TechInfo } from './tech.type';

export const Tech: Record<string, TechInfo[]> = {
  Communication: [
    { title: 'figma', img: figma },
    { title: 'git', img: git },
  ],
  Backend: [
    { title: 'firebase', img: firebase },
    { title: 'supabase', img: supabase },
  ],
  Frontend: [
    { title: 'HTML', img: html },
    { title: 'CSS', img: css },
    { title: 'JavaScript', img: javascript },
    { title: 'TypeScript', img: typescript },
    { title: 'React', img: react },
    { title: 'Next.js', img: next },
    { title: 'redux(toolkit)', img: redux },
    { title: 'zustand', img: zustand },
    { title: 'recoil', img: recoil },
    { title: 'react-query', img: reactQuery },
    { title: 'tailwind', img: tailwind },
    { title: 'styled-components', img: styledComponents },
  ],
};

export const TechName = ['Frontend', 'Backend', 'Communication'];
