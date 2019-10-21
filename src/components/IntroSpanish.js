import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import nameDen from '../images/dpbName.png';
import roleDen from '../images/dpbRoleEsp.png';

function IntroSpanish() {
  return (
    <section className="introductionSpa">
        <p className="changeLanguage"><Link to="/" className="links">Versión Inglés</Link></p>
        <img src={nameDen} alt="Denisse name" className="denName"></img>
        <img src={roleDen}alt="Denisse role" className="denRole"></img>
    </section> 
  );
}

export default IntroSpanish;
