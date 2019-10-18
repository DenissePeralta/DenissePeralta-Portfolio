import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import photoDen from '../images/dpbPhoto3.png';
import nameDen from '../images/dpbName.png';
import roleDen from '../images/dpbRoleEsp.png';

function IntroSpanish() {
  return (
    <section className="introductionSpa">
        <p className="changeLanguage"><Link to="/" className="links">Versión Inglés</Link></p>
        <img src={photoDen} alt="Denisse" className="denPhoto"></img>
        <img src={nameDen} alt="Denisse name" className="denName"></img>
        <img src={roleDen}alt="Denisse role" className="denRole"></img>
    </section> 
  );
}

export default IntroSpanish;
