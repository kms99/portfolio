// atoms.js
import { atom } from 'recoil';
import { ProjectModalState } from './atoms.type';

export const projectModalState = atom<ProjectModalState>({
  key: 'projectModalState', // 고유한 키
  default: { selectProject: null, isOpen: false }, // 기본값
});
