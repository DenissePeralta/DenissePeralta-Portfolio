import React from 'react';
import './componentsStyle.css';

const MyInfoSpanish = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ACERCA DE MI</p>
            <p className="aboutDescrip"> {`Tengo una verdadera pasión por el baile, la música y los viajes, pero también disfruto de explorar dentro de los misterios 
            de la vida, aprender y obtener conocimientos en nuevos temas así como dominar algunas otras habilidades. Siempre busco trasladar las ideas en acciones 
            concretas y en mi camino hacia ese objetivo, implemento diferentes valores que definen quién soy y la esencia que imprimo en cada interacción o decisión que tomo.`}
             <br></br><br></br>
            {`Estudié la licenciatura en Administración de Empresas con experiencia en el área de finanzas, pero ahora estoy descubriendo un gran interés en el 
            campo de la tecnología como lo es la inteligencia artificial, el internet de las cosas, UX/UI, diseño gráfico y desarrollo de software. Me encanta el 
            hecho de que puedo usar mi creatividad y destreza para colaborar en la creación de productos web innovadores y aplicaciones increíbles, con el fin de 
            proporcionar soluciones digitales a algunos de los retos y desafíos que se viven día a día en la comunidad e incluso en el mundo.`}</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
