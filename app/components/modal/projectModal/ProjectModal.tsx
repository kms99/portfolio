import React from 'react';
import Backdrop from '../Backdrop';
import ProjectModalInner from './ProjectModalInner';

export default function ProjectModal() {
  return (
    <Backdrop>
      <ProjectModalInner />
    </Backdrop>
  );
}
