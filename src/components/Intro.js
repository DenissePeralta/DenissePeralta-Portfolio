import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';

function Intro() {
  return (
    <section className="introduction">
      <section className="introFoto">
        <img src={require('../images/myPhotoBg0.svg')} alt="My face Denisse" className="myPhoto"></img>
      </section>
      <section className="introNameRole">
        <div className="changeLanguage">
          <Link to="/portafolioEnEspañol" className="links">
            <span role="img" aria-label="mexico's flag">🇲🇽 ESP</span>
          </Link>
        </div>
        <div className="introData">
          <p className="myName">DENISSE</p>
          <p className="myLastName">PERALTA</p>
          <p className="myRole">front-end developer</p>
        </div>
      </section>
      <div className="scroll-wrapper">
        <div className="container relative">
          <div className="scroll-block">
            <div className="scroll-arrow"></div>
            <div className="scroll-text">scroll</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
