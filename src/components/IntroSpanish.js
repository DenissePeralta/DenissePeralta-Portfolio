import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import nameRoleDen from '../images/dpbRoleEsp.png';

function IntroSpanish() {
  return (
    <section className="introductionSpa">
      <p className="changeLanguage"><Link to="/" className="links">Versión Inglés</Link></p>
      <img src={nameRoleDen}alt="Denisse role" className="denNameRole"></img>
    </section> 
  );
}

export default IntroSpanish;
