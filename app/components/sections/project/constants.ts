import { baseballTalk, mucation, pixtudy } from '@/public/assets/project';
import { Project } from './project.type';

export const PROJECT_LISTS: Project[] = [
  {
    previewSrc: pixtudy,
    duration: "'24.01. ~ '24.02.",
    title: 'Pixtudy',
    detail: '간단한 학습과 프로젝트를 위한 메타버스 공간',
    techs: ['TypeScript', 'Next.js', 'Zustand', 'ReactQuery', 'Supabase'],
  },
  {
    previewSrc: mucation,
    duration: "'23.12. ~ '23.12.",
    title: 'MUCATION',
    detail: '위치기반 음악 추천 플랫폼',
    techs: ['JavaScript', 'React', 'Redux', 'ReactQuery', 'Firebase'],
  },
  {
    previewSrc: baseballTalk,
    duration: "'23.11. ~ '23.11.",
    title: '프로야구 TALK',
    detail: '야구 팬들을 위한 팀별 소통 커뮤니티 플랫폼',
    techs: ['JavaScript', 'React', 'Redux', 'Axios', 'JsonServer'],
  },
];
