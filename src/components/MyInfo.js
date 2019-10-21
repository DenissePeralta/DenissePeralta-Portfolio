import React from 'react';
import './componentsStyle.css';
import aboutMe from '../images/aboutMe.png';

const MyInfo = () => {
    return (
        <section className="myInfo">
            <img src={aboutMe} alt="About me" className="aboutImage"></img>
            <p className="aboutDescrip">{`I was born in Veracruz, Mexico. I'm so passionate about dancing, 
            travelling, painting and create new things with any kind of materials. I studied the bachelor in Business 
            Administration but now I'm discovering a big interest in programming and technology.`}
            <br></br><br></br>
            {`I enjoy learning, exploring and evolucionating in this life journey. I see me as a determined person 
            who constantly persuit their goals. I like to bring the ideas into action using my skills as planning, 
            organized, analysis, decision-making and leadership.`}
            <br></br><br></br>
            {`One of the most rewarding things for me is to get involved in different social activities,
            I get worried about the wellness of people and the community around me so  
            I love the idea of build innovative web products and amazing apps to resolve some real life issues.`}</p>
        </section>
    );
  }
  
  export default MyInfo;
