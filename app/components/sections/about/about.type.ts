import React from 'react';

export type AboutInfoItemType = 'text' | 'link';

export interface AboutCareerItemType {
  duration: string;
  details: string;
  link?: string;
}

export interface AboutInfoItem {
  title: string;
  titleIcon: React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  contexts: string;
  link?: string;
}

export interface AboutCareerItem {
  title: string;
  titleIcon: React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  contexts: AboutCareerItemType[];
}
