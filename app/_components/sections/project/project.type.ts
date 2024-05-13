import { StaticImageData } from 'next/image';

export interface Project {
  previewSrc: StaticImageData;
  duration: string;
  title: string;
  detail: string;
  techs: string[];
}
