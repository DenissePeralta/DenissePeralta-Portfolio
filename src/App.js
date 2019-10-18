import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePortfolio from './components/HomePortfolio.js';
import HomePortfolioSpa from './components/HomePortfolioSpanish.js';
import './App.css';

function App() {
  return (
      <Router basename={window.location.pathname || ''}> 
        <Route exact path="/" component={HomePortfolio} />
        <Route exact path="/portafolioEnEspañol" component={HomePortfolioSpa} />
      </Router>
  );
}

export default App;
