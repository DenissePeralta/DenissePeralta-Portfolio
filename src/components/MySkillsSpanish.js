import React from 'react';
import './componentsStyle.css';
import mySkillsSpa from '../images/mySkillsEsp.png';

const MySkillsSpanish = () => {
    return (
        <section className="mySkillsContainer">
            <p className="mySkills">{``}</p>
            <img src={mySkillsSpa} alt="My Skills" className="skillsImage"></img>
        </section>
    );
  }
  
  export default MySkillsSpanish;
