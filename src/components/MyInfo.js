import React from 'react';
import './componentsStyle.css';

const AboutMe = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ABOUT ME</p>
            <p className="aboutDescrip">{`I’m a woman passionate about dancing and music, I enjoy to travel and be amazed 
            with the different landscapes, flavors and traditions of the places I go. I see myself  as an innate dreamer 
            who always seeks to translate ideas into concrete actions, curious to explore and learn new things.
            I studied the bachelor in Business Administration with experience in the Financial area but now I’m 
            discovering a big interest in graphic design, programming and technology ❤❤`}
            <br></br><br></br>
            {`I have the goal to get involve in social activities aimed to fight for the well-being and development 
            of the communities and ecosystems around me, so I love the idea of ​​being able to create innovative web products and 
            incredible applications to provide a digital solution to some of the challenges lived day by day in the society.`}</p>
        </section>
    );
  }
  
  export default AboutMe;
