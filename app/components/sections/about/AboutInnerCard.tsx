import React, { PropsWithChildren } from 'react';

type AboutInfoCardProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function AboutInnerCard({ children, title, icon }: PropsWithChildren<AboutInfoCardProps>) {
  return (
    <section className="flex flex-col">
      <div className="flex mb-2 border-b-2">
        {React.createElement(icon)}
        <span className="ml-2 font-bold text-xl">{title}</span>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
