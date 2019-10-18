import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import HomePortfolio from './components/HomePortfolio.js';
import HomePortfolioSpa from './components/HomePortfolioSpanish.js';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={HomePortfolio} />
      <Route exact path="/portafolioEnEspañol" component={HomePortfolioSpa} />
    </HashRouter>
  );
}

export default App;
