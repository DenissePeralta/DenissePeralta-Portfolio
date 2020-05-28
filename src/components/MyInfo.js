import React from 'react';
import './componentsStyle.css';

const AboutMe = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ABOUT ME</p>
            <p className="aboutDescrip">{`I have a real passion about dancing, music and travel but I also enjoy exploring into the life mysteries,  
            learning new things and master some other abilities. I always seeks to translate the ideas into concrete actions, and on my way to that goal,
            I implement different ethical values that defines who I am and the essence that I print in every action or decision.`}
            <br></br><br></br>
            {`I studied the bachelor in Business Administration with experience in the Financial area but now, I’m 
            discovering a big interest in the technology field such as Artificial Iintelligence, IoT, UX/UI, graphic design and software development. I love the fact 
            that I can use my creativity and skills to create innovative web products and incredible applications to provide digital solutions to some 
            of the challenges lived day by day in the society, community and even in the world.`}</p>
        </section>
    );
  }
  
  export default AboutMe;
