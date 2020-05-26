import React from 'react';
import './componentsStyle.css';

const MyProjects = () => {
    return (
        <section className="myProjectsContainer">
            <p className="projectsTitle">PRO JECTS</p>
            <section className="sliderContainer">
                <div className="projectsItem">
                    <img src={require('../images/cipher.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span class="itemTitle">SHHH!</span><br></br>
                            {`WebApp to cipher/decipher text and messages.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git & GitHub, Kanban, Responsive`}<br></br>
                            {`Individual work.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                            <a href="https://denisseperalta.github.io/GDL003-cipher/src/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/datalovers.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span class="itemTitle">POKEMON</span><br></br>
                            {`WebApp to see, filter and sort Pokemon character cards.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git & GitHub, Google Charts, Kanban, Figma, Responsive`}<br></br>
                            {`Collaborative work.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-data-lovers" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                            <a href="https://denisseperalta.github.io/GDL003-data-lovers/src/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/labnotess.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span class="itemTitle">HOUR TIME</span><br></br>
                            {`WebApp to create, delete and edit notes.`}<br></br>
                            {`HTML5, CSS3, JS ES6, Git & GitHub, GitHub Projects, Figma, React, Firebase, Responsive`}<br></br>
                            {`Individual work.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-lab-notes" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                            <a href="https://denisseperalta.github.io/GDL003-lab-notes/" className="demoButton" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="projectsItem">
                    <img src={require('../images/mdLinks.gif')} alt="My Projects"></img>
                    <div className="caption">
                        <span className="itemDescription">
                            <span class="itemTitle">MD LINKS REVIEWER</span><br></br>
                            {`Back-end project to verify the link status within a Markdown file.`}<br></br>
                            {`Nodejs, npm, JS ES6, Git & GitHub, GitHub Projects, HTTTP get`}<br></br>
                            {`Individual work.`}
                        </span>
                        <div className="buttonsContainer">
                            <a href="https://github.com/DenissePeralta/GDL003-md-links" className="codeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
  
export default MyProjects;
