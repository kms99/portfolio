import React, { PropsWithChildren } from 'react';

function SubTitle({ children }: PropsWithChildren) {
  return <h2 className="mt-28 mb-20 text-4xl font-bold">{children}</h2>;
}

export default SubTitle;
