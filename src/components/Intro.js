import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';
import photoDen from '../images/dpbPhoto3.png';
import nameDen from '../images/dpbName.png';
import roleDen from '../images/dpbRole.png';

function Intro() {
  return (
    <section className="introduction">
      <p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">Spanish Version</Link></p>
      <img src={photoDen} alt="Denisse" className="denPhoto"></img>
      <img src={nameDen} alt="Denisse name" className="denName"></img>
      <img src={roleDen}alt="Denisse role" className="denRole"></img>
    </section>
  );
}

export default Intro;
