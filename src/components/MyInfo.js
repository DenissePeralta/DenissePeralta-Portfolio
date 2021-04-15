import React from 'react';
import './componentsStyle.css';

const MyInfo = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ABOUT ME</p>
            <p className="aboutDescrip">{`I have a real passion about dancing, music, Sci-Fi movies/books and travel but I also enjoy reinventing myself, exploring into different topics, 
            conquering new goals and mastering other abilities. I always seek to translate the ideas into actions with the support of core values that define who I am and the way 
            I interact and respect others.`}
            <br></br><br></br>
            {`I studied the bachelor in Business Administration with experience in Finance, but recently I’ve switched my professional path to start a new career in the technology field. 
            I'm discovering amazing areas such as AI, IoT, UX/UI, graphic design, web development and software engineer in which I would like to leave a positive impact with my work and perspective.`}
            <br></br><br></br>
            {`I love the fact that I can use my creativity and skills to collaborate in the creation of innovative web products and incredible applications to provide digital solutions 
            to some of the challenges lived day by day in the society.`}</p>
        </section>
    );
  }
  
  export default MyInfo;
