import React from 'react';
import './componentsStyle.css';

const SlideProject2 = () => {
    return (
        <div className="item">
                            <img src={require('../images/datalovers.jpg')} alt="My Projects"></img>
        <div className="caption">
        <span className="slideDescription">
            {`POKEMON`}<br></br>
            {`Web app to see, filter and sort Pokemon. Collaborative work.`}<br></br>
            {`HTML5, CSS3, JS ES6`}
        </span>
        <div className="buttonsContainer">
            <a href="https://github.com/DenissePeralta/GDL003-cipher" className="codeButton" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://github.com/DenissePeralta/GDL003-cipher" className="demoButton" target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
    </div>
    </div>
    );
}
  
export default SlideProject2;