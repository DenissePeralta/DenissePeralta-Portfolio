import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';

function IntroSpanish() {
  return (
    <section className="introductionSpa">
            <section className="introFoto">
        <img src={require('../images/myPhotoBg0.svg')} alt="My face Denisse" className="myPhoto"></img>
      </section>
      <section className="introNameRole">
        <div className="changeLanguage">
          <Link to="/" className="links">
            <span role="img" aria-label="united states flag">🇺🇸 ENG</span>
          </Link>
        </div>
        <div className="introData">
          <p className="myName">DENISSE</p>
          <p className="myLastName">PERALTA</p>
          <p className="myRole">desarrolladora front-end</p>
        </div>
      </section>
      <div className="scroll-wrapper">
        <div className="container relative">
          <div className="scroll-block">
            <div className="scroll-arrow"></div>
            <div className="scroll-text">Deslizar</div>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default IntroSpanish;
