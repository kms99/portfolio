import React from 'react';
import { ProjectDetailType } from '@/app/_types/enums';
import { Tables } from '@/app/_utils/supabase/supabase.type';
import ProjectDetailItem from './ProjectDetailItem';

interface Props {
  data: Tables<'trouble_shooting' | 'contribute'>[];
  mode: ProjectDetailType;
}

export default function ProjectDetailList({ data, mode }: Props) {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-5">{mode ? '트러블 슈팅 및 개선' : '주요 구현사항'}</h2>
      <ul>
        {data?.map(troubleData => (
          <ProjectDetailItem key={troubleData.id}>
            <h2 className="font-bold text-lg">{troubleData.title}</h2>
            {'problem' in troubleData ? (
              <>
                <p className=" font-sub font-bold">{troubleData.problem}</p>
                <p className=" font-sub font-bold">{troubleData.process}</p>
                <p className=" font-sub font-bold">{troubleData.result}</p>
              </>
            ) : (
              <p className=" font-sub font-bold">{troubleData.context}</p>
            )}
          </ProjectDetailItem>
        ))}
      </ul>
    </div>
  );
}
