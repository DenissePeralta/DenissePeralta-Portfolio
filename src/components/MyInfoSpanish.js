import React from 'react';
import './componentsStyle.css';
import acercaDeMi from '../images/acercaDeMi.png';

const MyInfoSpanish = () => {
    return (
        <section className="myInfo">
            <img src={acercaDeMi} alt="Acerca de mi" className="acercaImage"></img>
            <p className="acercaDescrip">Originaria del puerto de Veracruz, México. Me apasiona 
            bailar, viajar, pintar y crear cosas nuevas con cualquier tipo de material. 
            Estudié la licenciatura en Administración de Empresas pero ahora estoy descubriendo
             un gran interés por la programación y la tecnología. Me encanta la idea de crear 
             productos web innovadores y aplicaciones increíbles para resolver algunos 
             problemas de la vida real.</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
