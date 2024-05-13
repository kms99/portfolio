import React, { PropsWithChildren } from 'react';

export default function ProjectDetailItem({ children }: PropsWithChildren) {
  return <li className="flex flex-col my-4 [&>p]:whitespace-pre-wrap">{children}</li>;
}
