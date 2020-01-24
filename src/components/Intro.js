import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';

function Intro() {
  return (
    <section className="introduction">
      <p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">🇲🇽 ESP</Link></p>
    </section>
  );
}

export default Intro;
