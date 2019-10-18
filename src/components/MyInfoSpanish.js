import React from 'react';
import './componentsStyle.css';
import acercaDeMi from '../images/acercaDeMi.png';

const MyInfoSpanish = () => {
    return (
        <section className="myInfo">
            <img src={acercaDeMi} alt="Acerca de mi" className="acercaImage"></img>
            <p className="acercaDescrip">Soy originaria del puerto de Veracruz, Mexico. Estudié la licenciatura en Administración de empresas.</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
