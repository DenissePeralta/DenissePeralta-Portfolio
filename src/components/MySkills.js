import React from 'react';
import './componentsStyle.css';
import mySkills from '../images/mySkills1.png';
import value1 from '../images/value1.png';
import value2 from '../images/value2.png';
import value3 from '../images/value3.png';
import value4 from '../images/value4.png';
import value5 from '../images/value5.png';
import value6 from '../images/value6.png';
import value7 from '../images/value7.png';
import value8 from '../images/value8.png';
import tech1 from '../images/tech1.png';
import tech2 from '../images/tech2.png';
import tech3 from '../images/tech3.png';
import tech4 from '../images/tech4.png';
import tech5 from '../images/tech5.png';
import tech6 from '../images/tech6.png';
import tech7 from '../images/tech7.png';
import tech8 from '../images/tech8.png';
import tech9 from '../images/tech9.png';
import tech10 from '../images/tech10.png';

const MySkills = () => {
    return (
        <section className="mySkillsContainer">
            <section className="mySkills">
             <img src={value1} alt="My Skills" className="skillsIcons"></img>
             <img src={value2} alt="My Skills" className="skillsIcons"></img>
             <img src={value3} alt="My Skills" className="skillsIcons"></img>
             <img src={value4} alt="My Skills" className="skillsIcons"></img>
             <img src={value5} alt="My Skills" className="skillsIcons"></img>
             <img src={value6} alt="My Skills" className="skillsIcons"></img>
             <img src={value7} alt="My Skills" className="skillsIcons"></img>
             <img src={value8} alt="My Skills" className="skillsIcons"></img>
             <img src={tech1} alt="My Skills" className="skillsIcons"></img>
             <img src={tech2} alt="My Skills" className="skillsIcons"></img>
             <img src={tech3} alt="My Skills" className="skillsIcons"></img>
             <img src={tech4} alt="My Skills" className="skillsIcons"></img>
             <img src={tech5} alt="My Skills" className="skillsIcons"></img>
             <img src={tech6} alt="My Skills" className="skillsIcons"></img>
             <img src={tech7} alt="My Skills" className="skillsIcons"></img>
             <img src={tech8} alt="My Skills" className="skillsIcons"></img>
             <img src={tech9} alt="My Skills" className="skillsIcons"></img>
             <img src={tech10} alt="My Skills" className="skillsIcons"></img>
            </section>
            <img src={mySkills} alt="My Skills" className="skillsImage"></img>
        </section>
    );
  }
  
  export default MySkills;
