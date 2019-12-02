import React from 'react';
import './componentsStyle.css';

const MyProjects = () => {
    return (
        <section className="myProjectsContainer">
            <p className="projectsTitle">PRO JECTS</p>
                <section className="sliderContainer">
                    <div className="sliderItems">
                        <div className="item">
                            <img src={require('../images/cipher.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`SHHH!`}<br></br>
                                    {`Web app to cipher and decipher text and messages. Individual work.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git and GitHub, Kanban, Ribbet, Responsive`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                                    <a href="https://denisseperalta.github.io/GDL003-cipher/src/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/datalovers.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`POKEMON`}<br></br>
                                    {`Web app to see, filter and sort character cards from the Pokemon world. Collaborative work.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git and GitHub, Google Charts, Kanban, Figma, Ribbet, Responsive`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-data-lovers" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                                    <a href="https://denisseperalta.github.io/GDL003-data-lovers/src/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/labnotess.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`HOUR TIME`}<br></br>
                                    {`Web app to create, delete and edit notes. Individual work.`}<br></br>
                                    {`HTML5, CSS3, JS ES6, Git and GitHub, GitHub Projects, Figma, Ribbet, React, Firebase, Responsive`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-lab-notes" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                                    <a href="https://denisseperalta.github.io/GDL003-lab-notes/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img src={require('../images/mdLinks.gif')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`MD LINKS`}<br></br>
                                    {`Back-end project to verify the links into a Markdown file (.md). Individual work.`}<br></br>
                                    {`Nodejs, npm, JS ES6, Git and GitHub, GitHub Projects, HTTTP get, Back-end`}
                                </span>
                                <div className="buttonsContainer">
                                    <a href="https://github.com/DenissePeralta/GDL003-md-links" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    );
}
  
export default MyProjects;
