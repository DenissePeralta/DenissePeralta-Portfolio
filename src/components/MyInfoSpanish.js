import React from 'react';
import './componentsStyle.css';
import acercaDeMi from '../images/acercaDeMi.png';

const MyInfoSpanish = () => {
    return (
        <section className="myInfo">
            <img src={acercaDeMi} alt="Acerca de mi" className="acercaImage"></img>
        </section>
    );
  }
  
  export default MyInfoSpanish;