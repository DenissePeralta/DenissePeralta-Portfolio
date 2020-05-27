import React from 'react'
import './componentsStyle.css';

const MyProjectsSpanish = () => {
    return (
        <section className="myProjectsContainer">
            <p className="projectsTitle">PROYEC TOS</p>
            <section className="sliderContainer">
                <div className="projectsItem">
                    <img src={require('../images/cipher.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span className="itemTitle">SHHH!</span><br></br>
                            {`Aplicación web para cifrar/descifrar texto y mensajes.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git y GitHub, Kanban, Responsivo`}<br></br>
                            {`Trabajo individual.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                            <a href="https://denisseperalta.github.io/GDL003-cipher/src/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/datalovers.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                             <span className="itemTitle">POKEMON</span><br></br>
                            {`Aplicación web para visualizar, filtrar y ordenar tarjetas de los personajes Pokemon.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git y GitHub, Google Charts, Kanban, Figma, Responsivo`}<br></br>
                            {`Trabajo colaborativo.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-data-lovers" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                            <a href="https://denisseperalta.github.io/GDL003-data-lovers/src/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/labnotess.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span className="itemTitle">HOUR TIME</span><br></br>
                            {`Aplicación web para crear, eliminar y editar notas.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git y GitHub, GitHub Projects, Figma, React, Firebase, Responsivo`}<br></br>
                            {`Trabajo individual.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-lab-notes" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                            <a href="https://denisseperalta.github.io/GDL003-lab-notes/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/mdLinks.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span className="itemTitle">MD LINKS REVIEWER</span><br></br>
                            {`Proyecto back-end para verificar el estatus de las ligas dentro de un archivo Markdown/Marcado ligero.`}<br></br>
                            {`Nodejs, npm, JS ES6, Git y GitHub, GitHub Projects, HTTTP get`}<br></br>
                            {`Trabajo individual.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-md-links" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
  
export default MyProjectsSpanish;