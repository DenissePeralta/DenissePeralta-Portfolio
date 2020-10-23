import React from 'react';
import './componentsStyle.css';
import CV from "../images/Denisse_Peralta_Resume.pdf";

const ContactMe = () => {
    return (
        <section className="contactMeContainer">
            <section className="contactMeList">
                <a href="https://www.linkedin.com/in/denisse-peralta/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/linkedin.svg')} alt="Social Media" className="contactIcon"></img>
                </a>
                <a href="https://github.com/DenissePeralta" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/github.svg')} alt="Social Media" className="contactIcon"></img>
                </a>
                <a href="mailto:dnisse-x00@hotmail.com?Subject=He%20revisado%20tu%20portafolio%20/%20I've%20seen%20your%20portfolio" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/email.svg')} alt="Social Media" className="contactIcon"></img>
                </a>
                <a href={CV} target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/resume.svg')} alt="Social Media" className="contactIcon"></img>
                </a>
            </section>
            <p className="contactMeTitle">CONTACT ME</p>
        </section>
    );
}
  
export default ContactMe;
