import React from 'react';
import './componentsStyle.css';

const AboutMeSpanish = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ACERCA DE MI</p>
            <p className="aboutDescrip"> {`Soy una mujer apasionada con el baile, la música y los viajes. Curiosa por investigar, 
            explorar y aprender cosas nuevas. Me considero una persona determinante que siempre busca trasladar las ideas en acciones
             concretas, recurro a la empatía para entender las necesidades de las pesonas y me apoyo en la congruencia para alinear lo que pienso con lo 
            que digo y hago. Estudié la licenciatura en Administración de Empresas con experiencia en el área de Finanzas
            pero actualmente estoy descubriendo un gran interés por el diseño gráfico, la programación y la tecnología.`}
             <br></br><br></br>
            {`Tengo el objetivo de participar en actividades 
            orientadas a luchar por el bienestar y el desarrollo de las comunidades y ecosistemas que me rodean, así que me encanta la idea de poder crear productos web 
            innovadores y aplicaciones increíbles para proporcionar una solución digital a algunos de los retos y desafíos que se viven día a día en la sociedad. `}</p>
        </section>
    );
  }
  
  export default AboutMeSpanish;
