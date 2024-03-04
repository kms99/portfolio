import React, { PropsWithChildren } from 'react';

type SubProps = {};

function SubTitle({ children }: PropsWithChildren<SubProps>) {
  return <h2 className="mt-28 mb-20 text-4xl font-bold">{children}</h2>;
}

export default SubTitle;
