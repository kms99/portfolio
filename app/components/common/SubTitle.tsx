import React, { PropsWithChildren } from "react";

type SubProps = {};

const SubTitle = ({ children }: PropsWithChildren<SubProps>) => {
  return <h2 className="mt-28 mb-10 text-4xl font-bold">{children}</h2>;
};

export default SubTitle;
