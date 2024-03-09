// atoms.js
import { atom } from 'recoil';
import { ProjectModalStateType } from './atoms.type';

export const projectModalState = atom<ProjectModalStateType>({
  key: 'projectModalState', // 고유한 키
  default: { selectProject: null, isOpen: false }, // 기본값
});

export const bookPageState = atom<number>({
  key: 'bookPageState', // 고유한 키
  default: 0, // 기본값
});
