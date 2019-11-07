import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import nameRoleDen from '../images/dpbRole.png';

function Intro() {
  return (
    <section className="introduction">
      <p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">Spanish Version</Link></p>
      <img src={nameRoleDen}alt="Denisse name and role" className="denNameRole"></img>
    </section>
  );
}

export default Intro;
