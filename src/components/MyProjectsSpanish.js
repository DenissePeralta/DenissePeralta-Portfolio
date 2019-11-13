import React from 'react';
import './componentsStyle.css';
import myProjectsSpa from '../images/myProjectsEsp.png';

const MyProjectsSpanish = () => {
    return (
        <section className="myProjectsContainer">
            <img src={myProjectsSpa} alt="My Projects" className="projectsImage"></img>
            <section className="myProjectsDescription">

            </section>
        </section>
    );
  }
  
  export default MyProjectsSpanish;
