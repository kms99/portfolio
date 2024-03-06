import { useRecoilState } from 'recoil';
import { projectModalState } from '../states/atoms';
import { ProjectModalState } from '../states/atoms.type';

export default function useModal() {
  const [projectState, setProjectState] = useRecoilState(projectModalState);

  const openProject = (project: string) => {
    const newState: ProjectModalState = { isOpen: true, selectProject: project };
    setProjectState(newState);
  };

  const closeProject = () => {
    const newState: ProjectModalState = { isOpen: false, selectProject: null };
    setProjectState(newState);
  };

  return { projectState, openProject, closeProject };
}
