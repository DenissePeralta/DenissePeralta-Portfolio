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
            <span role="img" aria-label="mexico's flag">🇲🇽</span> ESP
          </Link>
        </div>
        <div className="introData">
          <p className="myName">DENISSE</p>
          <p className="myLastName">PERALTA</p>
          <p className="myRole">front-end developer</p>
        </div>
      </section>
    </section>
  );
}

export default Intro;
