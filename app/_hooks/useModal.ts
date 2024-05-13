import { useRecoilState } from 'recoil';
import { projectModalState } from '../_states/recoil/atoms';
import { ProjectModalStateType } from '../_states/recoil/atoms.type';

export default function useModal() {
  const [projectState, setProjectState] = useRecoilState(projectModalState);

  const openProject = (project: string): void => {
    const newState: ProjectModalStateType = { isOpen: true, selectProject: project };
    setProjectState(newState);
  };

  const closeProject = (): void => {
    const newState: ProjectModalStateType = { isOpen: false, selectProject: null };
    setProjectState(newState);
  };

  return { projectState, openProject, closeProject };
}
