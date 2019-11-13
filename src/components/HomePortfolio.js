import React from 'react';
import Intro from './Intro.js';
import AboutMe from './MyInfo.js';
import MySkills from './MySkills.js';
import MyProjects from './MyProjects.js';

const HomePortfolio = () => {
  return (
    <section>
      <Intro />
      <AboutMe />
      <MySkills />
      <MyProjects />
    </section>
  );
}

export default HomePortfolio;
