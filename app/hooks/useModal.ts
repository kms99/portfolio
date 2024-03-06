import { useRecoilState } from 'recoil';
import { projectModalState } from '../states/recoil/atoms';
import { ProjectModalState } from '../states/recoil/atoms.type';

export default function useModal() {
  const [projectState, setProjectState] = useRecoilState(projectModalState);

  const openProject = (project: string): void => {
    const newState: ProjectModalState = { isOpen: true, selectProject: project };
    setProjectState(newState);
  };

  const closeProject = (): void => {
    const newState: ProjectModalState = { isOpen: false, selectProject: null };
    setProjectState(newState);
  };

  return { projectState, openProject, closeProject };
}
