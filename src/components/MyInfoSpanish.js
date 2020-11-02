import React from 'react';
import './componentsStyle.css';

const MyInfoSpanish = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ACERCA DE MI</p>
            <p className="aboutDescrip"> {`Tengo una verdadera pasión por el baile, la música y los viajes, pero también disfruto explorar dentro de los misterios 
            de la vida, obtener conocimientos nuevos así como dominar y ejercitar otras habilidades. Mi objetivo principal es trasladar las ideas en acciones 
            concretas y en mi camino hacia ese objetivo, voy construyendo las bases con ayuda de diferentes valores que definen quién soy y la esencia que imprimo en cada decisión que tomo.`}
             <br></br><br></br>
            {`Estudié la licenciatura en Administración de Empresas con experiencia en el área de finanzas, pero ahora estoy descubriendo un gran interés en el 
            campo de la tecnología como lo es la inteligencia artificial, el internet de las cosas, UX/UI, diseño gráfico y desarrollo de software. Me encanta el 
            hecho de que puedo usar mi creatividad y destreza para colaborar en la creación de productos web innovadores y aplicaciones increíbles con el fin de 
            proporcionar soluciones digitales a diversos desafíos que se viven día a día en la sociedad.`}</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
