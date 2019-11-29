import React from 'react';
import Intro from './Intro.js';
import AboutMe from './MyInfo.js';
import MySkills from './MySkills.js';
import MyProjects from './MyProjects.js';
import ContactMe from './ContactMe.js';

const HomePortfolio = () => {
  return (
    <section className="mainComponent">
      <Intro />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <ContactMe />
    </section>
  );
}

export default HomePortfolio;
