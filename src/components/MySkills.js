import React from 'react';
import './componentsStyle.css';
import mySkills from '../images/mySkills1.png';

const MySkills = () => {
    return (
        <section className="mySkillsContainer">
            <section className="mySkills">
             <img src={require('../images/value1.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value2.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value3.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value4.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value5.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value6.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value7.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/value8.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech1.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech2.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech3.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech4.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech5.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech6.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech7.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech8.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech9.png')} alt="My Skills" className="skillsIcons"></img>
             <img src={require('../images/tech10.png')} alt="My Skills" className="skillsIcons"></img>
            </section>
            <img src={mySkills} alt="My Skills" className="skillsImage"></img>
        </section>
    );
  }
  
  export default MySkills;
