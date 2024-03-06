import React, { PropsWithChildren } from 'react';

type AboutInfoCardProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function AboutInnerCard({ children, title, icon }: PropsWithChildren<AboutInfoCardProps>) {
  return (
    <section className="my-4 [&>div]:flex [&>div:last-child]:flex-col [&>span]:text-base [&>a]:text-base [&>a]:w-fit [&>span]:font-bold [&>a]:font-bold [&>a:hover]:underline [&>div>section>a:hover]:underline [&>div>span]:text-base [&>div>section]:flex [&>div>section]:text-sm [&>div>section]:flex-col [&>div>section+section]:mt-3 [&>div>section>span+span]:text-base [&>div>section>span+span]:font-bold [&>div>section>a]:text-base [&>div>section>a]:font-bold [&>div>section>a]:w-fit">
      <div className="flex mb-2 border-b-2">
        {React.createElement(icon)}
        <span className="ml-2 text-lg font-bold">{title}</span>
      </div>
      {children}
    </section>
  );
}
