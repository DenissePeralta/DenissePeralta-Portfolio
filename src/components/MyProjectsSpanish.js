import React from 'react'
import './componentsStyle.css';
import myProjectsSpa from '../images/myProjectsEsp.png';


const MyProjectsSpanish = () => {
    return (
        <section className="myProjectsContainer">
            <img src={myProjectsSpa} alt="My Projects" className="projectsImage"></img>
                <section className="sliderContainer">
                    <div className="sliderItems">
                        <div className="item active">
                            <img src={require('../images/cipher.jpg')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`SHHH!`}<br></br>
                                    {`Aplicación web para cifrar y descifrar palabras y oraciones. Trabajo individual.`}<br></br>
                                    {`HTML5, CSS3, JS ES6`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">Code</a>
                                    <a href="https://github.com/DenissePeralta/GDL003-cipher" className="demoButton" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/datalovers.jpg')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`POKEMON`}<br></br>
                                    {`Aplicación web para visualizar, filtrar y ordenar a los personajes del mundo Pokemon. Trabajo colaborativo.`}<br></br>
                                    {`HTML5, CSS3, JS ES6`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-data-lovers" className="codeButton" target="_blank" rel="noopener noreferrer">Code</a>
                                    <a href="https://github.com/DenissePeralta/GDL003-cipher" className="demoButton" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    );
}
  
export default MyProjectsSpanish;