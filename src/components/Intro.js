import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import nameDen from '../images/dpbName.png';
import roleDen from '../images/dpbRole.png';

function Intro() {
  return (
    <section className="introduction">
      <p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">Spanish Version</Link></p>
      <img src={nameDen} alt="Denisse name" className="denName"></img>
      <img src={roleDen}alt="Denisse role" className="denRole"></img>
    </section>
  );
}

export default Intro;
