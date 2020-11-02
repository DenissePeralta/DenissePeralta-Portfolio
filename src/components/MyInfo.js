import React from 'react';
import './componentsStyle.css';

const MyInfo = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ABOUT ME</p>
            <p className="aboutDescrip">{`I have a real passion about dancing, music and travel, but I also enjoy exploring into the life mysteries, gain 
            knowledge in new topics and master other abilities. I always seek to translate the ideas into concrete actions, and on my way to that goal,
            I implement different core values that define who I am and the essence that I print in each decision that I make.`}
            <br></br><br></br>
            {`I studied the bachelor in Business Administration with experience in the Financial area, but now, I’m discovering a big interest in the technology 
            field such as AI, IoT, UX/UI, graphic design and software development. I love the fact that I can use my creativity and skills to 
            collaborate in the creation of innovative web products and incredible applications to provide digital solutions 
            to some of the challenges lived day by day in the society.`}</p>
        </section>
    );
  }
  
  export default MyInfo;
