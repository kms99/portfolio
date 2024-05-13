import { getProjectInfo } from '@/app/_utils/supabase/supabaseUtils';
import { useQuery } from '@tanstack/react-query';

export default function useProject(title: string) {
  const { data, error } = useQuery({
    queryKey: ['getProject', title],
    queryFn: () => getProjectInfo(title),
  });

  return { data, error };
}
