import React, { PropsWithChildren } from "react";

type AboutInfoCardProps = {
  title: string;
  icon: React.JSX.Element;
};

const AboutInfoCard = ({
  children,
  title,
  icon,
}: PropsWithChildren<AboutInfoCardProps>) => {
  return (
    <section className="my-3 [&>p]:flex [&>p]:flex-col [&>span]:text-2xl [&>p>span]:text-lg [&>p>span+span]:text-2xl">
      <label htmlFor="" className="flex mb-2 border-b-2">
        {icon}
        <span className="ml-2 text-lg font-bold">{title}</span>
      </label>
      {children}
    </section>
  );
};

export default AboutInfoCard;
