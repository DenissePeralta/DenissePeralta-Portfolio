import React from 'react';
import './componentsStyle.css';

const MyInfoSpanish = () => {
    return (
        <section className="myInfoContainer">
            <p className="aboutTitle">ACERCA DE MI</p>
            <p className="aboutDescrip"> {`Tengo una verdadera pasión por el baile, la música, los libros/películas de Ciencia Ficción y los viajes, pero también disfruto reinventándome, 
            explorando diferentes temas, conquistando nuevos desafíos así como dominando otras habilidades. Siempre busco trasladar las ideas en acciones concretas con la ayuda de diferentes 
            valores que definen quién soy y la forma en que interactúo y respeto a los demás.`}
             <br></br><br></br>
            {`Estudié la licenciatura en Administración de Empresas con experiencia en Finanzas, pero recientemente he cambiado mi trayectoria profesional para comenzar una nueva carrera 
            en el mundo de la tecnología. Estoy descubriendo áreas magníficas como lo es la inteligencia artificial, el internet de las cosas, UX/UI, diseño gráfico, desarrollo web e ingeniería de 
            software, en las cuáles me gustaría dejar un impacto positivo con mi perspectiva y trabajo.`}
            <br></br><br></br>
            {`Me encanta el hecho de que puedo usar mi creatividad y destreza para colaborar en la creación de productos web innovadores y aplicaciones increíbles, con el fin de proporcionar 
            soluciones digitales a diversos desafíos que se viven día a día en la sociedad.`}</p>
        </section>
    );
  }
  
  export default MyInfoSpanish;
   