import React from 'react';
import './componentsStyle.css';
import acercaDeMi from '../images/acercaDeMi.png';

const MyInfoSpanish = () => {
    return (
        <section className="myInfo">
            <img src={acercaDeMi} alt="Acerca de mi" className="acercaImage"></img>
            <p className="acercaDescrip"> {`Originaria del puerto de Veracruz, México. Me apasiona 
            bailar, viajar, pintar y crear cosas nuevas con cualquier tipo de material. 
            Estudié la licenciatura en Administración de Empresas pero ahora estoy descubriendo
             un gran interés por la programación y la tecnología.`}
             <br></br><br></br>
            {`Disfruto aprendiendo, explorando y evolucionando en este viaje de la vida. Me veo 
            como una persona decidida que constantemente persigue sus objetivos. Me gusta llevar 
            las ideas a la acción usando mis habilidades como planificación, organización, análisis, 
            toma de decisiones y liderazgo.`}
            <br></br><br></br>
            {`Una de las cosas más gratificantes para mí es involucrarme en diferentes actividades 
            sociales, me preocupa el bienestar de las personas y la comunidad que me rodea, así que me encanta 
            la idea de crear productos web innovadores y aplicaciones increíbles para resolver algunos problemas 
            de la vida real.`}</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
