import React from 'react';
import './componentsStyle.css';

const AboutMe = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ABOUT ME</p>
            <p className="aboutDescrip">{`I’m a woman passionate about dancing, music and travel. I'm curious to search, explore 
            and learn new things. I see myself as a decisive person who always seeks to translate ideas into concrete actions, 
            I resort to empathy to understand people needs and I rely on congruence to align what I think with what I say and do.
            I studied the bachelor in Business Administration with experience in the Financial area but now I’m 
            discovering a big interest in graphic design, programming and technology.`}
            <br></br><br></br>
            {`I have the goal to get involve in social activities aimed to fight for the well-being and development 
            of the communities and ecosystems around me, so I love the idea of ​​being able to create innovative web products and 
            incredible applications to provide a digital solution to some of the challenges lived day by day in the society.`}</p>
        </section>
    );
  }
  
  export default AboutMe;
