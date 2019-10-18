import React from 'react';
import './componentsStyle.css';
import aboutMe from '../images/aboutMe.png';

const MyInfo = () => {
    return (
        <section className="myInfo">
            <img src={aboutMe} alt="About me" className="aboutImage"></img>
        </section>
    );
  }
  
  export default MyInfo;
  