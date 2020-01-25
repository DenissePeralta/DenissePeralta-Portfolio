import React from 'react';
import { Link } from "react-router-dom";
import './componentsStyle.css';

function IntroSpanish() {
  return (
    <section className="introductionSpa">
      <p className="changeLanguage"><Link to="/" className="links"><span role="img" aria-label="united states flag">🇺🇸</span> ENG</Link></p>
    </section> 
  );
}

export default IntroSpanish;
