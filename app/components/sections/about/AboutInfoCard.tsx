import React, { PropsWithChildren } from 'react';

type AboutInfoCardProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function AboutInfoCard({
  children,
  title,
  icon,
}: PropsWithChildren<AboutInfoCardProps>) {
  return (
    <section className="my-3 [&>p]:flex [&>p]:flex-col [&>span]:text-2xl [&>p>span]:text-lg [&>p>span+span]:text-2xl">
      <div className="flex mb-2 border-b-2">
        {React.createElement(icon)}
        <span className="ml-2 text-lg font-bold">{title}</span>
      </div>
      {children}
    </section>
  );
}

export default AboutInfoCard;
