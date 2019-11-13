import React from 'react';
import './componentsStyle.css';
import myProjects from '../images/myProjects.png';

const MyProjects = () => {
    return (
        <section className="myProjectsContainer">
            <img src={myProjects} alt="My Projects" className="projectsImage"></img>
            <section className="myProjectsDescription">

            </section>
        </section>
    );
  }
  
  export default MyProjects;
