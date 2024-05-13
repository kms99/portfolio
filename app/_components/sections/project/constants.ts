import { mucation, pixtudy, portfolio } from '@/public/assets/project';
import { Project } from './project.type';

export const PROJECT_LISTS: Project[] = [
  {
    previewSrc: pixtudy,
    duration: '2024.01 ~ 2024.02',
    title: 'Pixtudy',
    detail: '간단한 학습과 프로젝트를 위한 메타버스 플랫폼',
    techs: ['TypeScript', 'Next.js', 'Zustand', 'ReactQuery', 'Supabase'],
  },
  {
    previewSrc: portfolio,
    duration: '2023.12 ~ ',
    title: 'Portfolio',
    detail: '웹 프론트엔드 개발자 김명섭의 포트폴리오',
    techs: ['TypeScript', 'Next.js', 'Recoil', 'ReactQuery', 'Supabase'],
  },
  {
    previewSrc: mucation,
    duration: '2023.12 ~ 2023.12',
    title: 'MUCATION',
    detail: '위치기반 음악 추천 플랫폼',
    techs: ['JavaScript', 'React', 'Redux', 'ReactQuery', 'Firebase'],
  },
];
