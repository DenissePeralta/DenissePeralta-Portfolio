import React from 'react';
import './componentsStyle.css';
import aboutMe from '../images/aboutMe.png';

const MyInfo = () => {
    return (
        <section className="myInfo">
            <img src={aboutMe} alt="About me" className="aboutImage"></img>
            <p className="aboutDescrip">I was born in Veracruz, Mexico. I'm so passionate about dancing, 
            travelling, painting and create new things with any kind of materials. I studied the bachelor in Business 
            Administration but now I'm discovering a big interest in programming and technology. I love the
            idea of build innovative web products and amazing apps to resolve some 
            real life issues.</p>
        </section>
    );
  }
  
  export default MyInfo;
