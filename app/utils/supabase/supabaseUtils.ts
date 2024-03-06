import { supabase } from './supabaseClient';

// 프로젝트 정보를 가져오는 함수
export const getProjectInfo = async (projectTitle: string | null) => {
  if (!projectTitle) throw new Error('프로젝트 명이 입력되지 않았습니다');

  const { data, error } = await supabase
    .from('project')
    .select(`*, front_tech(*), back_tech(*), contribute(*), trouble_shooting(*)`)
    .eq('title', projectTitle!)
    .single();

  if (error || !data) throw new Error('오류가 발생하였습니다.');

  return data;
};
