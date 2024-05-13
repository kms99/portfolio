import React, { PropsWithChildren } from 'react';

type AboutInfoCardProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function AboutInnerCard({ children, title, icon }: PropsWithChildren<AboutInfoCardProps>) {
  return (
    <section className="flex flex-col">
      <div className="flex items-center mb-2 border-b-2 [&>svg]:scale-[0.8] laptop:[&>svg]:scale-100">
        {React.createElement(icon)}
        <span className="ml-2 font-bold text-[1em]">{title}</span>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
