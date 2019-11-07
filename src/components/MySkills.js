import React from 'react';
import './componentsStyle.css';
import mySkills from '../images/mySkills.png';

const MySkills = () => {
    return (
        <section className="mySkillsContainer">
            <p className="mySkills">{``}</p>
            <img src={mySkills} alt="My Skills" className="skillsImage"></img>
        </section>
    );
  }
  
  export default MySkills;
