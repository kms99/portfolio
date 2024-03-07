import React from 'react';
import { Tables } from '@/app/utils/supabase/supabase.type';
import { ProjectDetailType } from '@/app/types/enums';
import ProjectDetailItem from './ProjectDetailItem';

interface Props {
  data: Tables<'trouble_shooting' | 'contribute'>[];
  mode: ProjectDetailType;
}

export default function ProjectDetailList({ data, mode }: Props) {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold">{mode ? '트러블 슈팅 및 개선' : '주요 구현사항'}</h2>
      <ul>
        {data?.map(troubleData => (
          <ProjectDetailItem key={troubleData.id}>
            <h2 className="font-bold text-xl">{troubleData.title}</h2>
            {'problem' in troubleData ? (
              <>
                <p>{troubleData.problem}</p>
                <p>{troubleData.process}</p>
                <p>{troubleData.result}</p>
              </>
            ) : (
              <p>{troubleData.context}</p>
            )}
          </ProjectDetailItem>
        ))}
      </ul>
    </div>
  );
}
