import React from 'react';
import './componentsStyle.css';

const AboutMeSpanish = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ACERCA DE MI</p>
            <p className="aboutDescrip"> {`Tengo una verdadera pasión por el baile, la música y los viajes, pero también disfruto de explorar dentro 
            de los misterios de la vida, aprender cosas nuevas y dominar algunas otras habilidades. Siempre busco trasladar las ideas en acciones concretas 
            y en mi camino hacia ese objetivo, implemento diferentes valores éticos que definen quién soy y la esencia que imprimo en cada acción o decisión.`}
             <br></br><br></br>
            {`Estudié la licenciatura en Administración de Empresas con experiencia en el área de finanzas, pero ahora, estoy descubriendo un gran interés en el 
            campo de la tecnología como IA, IoT, UX/UI, diseño gráfico y desarrollo de software. `}
             <br></br><br></br>
            {`Me encanta el hecho de que puedo usar mis habilidades para crear productos web innovadores y aplicaciones increíbles, con el fin de proporcionar 
            soluciones digitales a algunos de los retos y desafíos que se viven día a día en la sociedad, la comunidad e incluso en el mundo. `}</p>
        </section>
    );
  }
  
  export default AboutMeSpanish;
