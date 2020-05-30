import React from 'react';
import IntroSpanish from './IntroSpanish.js';
import MyInfoSpanish from './MyInfoSpanish.js';
import MySkillsSpanish from './MySkillsSpanish.js';
import MyProjectsSpanish from './MyProjectsSpanish.js';
import ContactMeSpanish from './ContactMeSpanish.js';

const HomePortfolioSpa = () => {
  return (
    <section className="mainComponent">
      <IntroSpanish />
      <MyInfoSpanish />
      <MySkillsSpanish />
      <MyProjectsSpanish />
      <ContactMeSpanish />
    </section>
  );
}

export default HomePortfolioSpa;
