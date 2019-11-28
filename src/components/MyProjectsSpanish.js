import React from 'react'
import './componentsStyle.css';

const MyProjectsSpanish = () => {
    return (
        <section className="myProjectsContainer">
            <p className="projectsTitle">PROYEC<br></br>TOS</p>
                <section className="sliderContainer">
                    <div className="sliderItems">
                        <div className="item">
                            <img src={require('../images/cipher.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`SHHH!`}<br></br>
                                    {`Aplicación web para cifrar y descifrar texto y mensajes. Trabajo individual.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git y GitHub, Kanban, Ribbet, Responsivo`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                                    <a href="https://denisseperalta.github.io/GDL003-cipher/src/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/datalovers.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`POKEMON`}<br></br>
                                    {`Aplicación web para visualizar, filtrar y ordenar tarjetas con los personajes del mundo Pokemon. Trabajo colaborativo.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git y GitHub, Google Charts, Kanban, Figma, Ribbet, Responsivo`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-data-lovers" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                                    <a href="https://denisseperalta.github.io/GDL003-data-lovers/src/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/labnotess.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`HOUR TIME`}<br></br>
                                    {`Aplicación web para crear, eliminar y editar notas. Trabajo individual.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git y GitHub, GitHub Projects, Figma, Ribbet, React, Firebase`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-lab-notes" className="codeButton" target="_blank" rel="noopener noreferrer">Ver Código</a>
                                    <a href="https://denisseperalta.github.io/GDL003-lab-notes/" className="demoButton" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    );
}
  
export default MyProjectsSpanish;