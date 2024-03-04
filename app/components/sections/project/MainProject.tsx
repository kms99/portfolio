import React from 'react';
import SubTitle from '../../common/SubTitle';

function MainProject() {
  return (
    <section
      className="h-screen flex flex-col items-center relative"
      id="project"
    >
      <SubTitle>프로젝트</SubTitle>
      <ul>
        <li>프로젝트1</li>
        <li>프로젝트2</li>
        <li>프로젝트3</li>
        <li>프로젝트4</li>
      </ul>
    </section>
  );
}

export default MainProject;
