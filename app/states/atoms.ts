// atoms.js
import { atom } from 'recoil';

export const projectModalState = atom({
  key: 'projectModalState', // 고유한 키
  default: { selectProject: null, isOpen: false }, // 기본값
});
