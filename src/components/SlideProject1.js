import React from 'react';
import './componentsStyle.css';


const SlideProject1 = () => {
    return (
        <div className="item">
                            <img src={require('../images/cipher.jpg')} alt="My Projects"></img>
                            <div className="caption">
                                <span className="slideDescription">
                                    {`SHHH!`}<br></br>
                                    {`Web app to cipher and decipher words and phrases. Individual work.`}<br></br>
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
  
export default SlideProject1;