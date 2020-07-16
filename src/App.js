import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './routes/Home';

import './App.css';

function App() {

  return(
    <Router>  
    <div>
      <Route exact path="/"/>
      <Home />
    </div>
    </Router>
  )
}

export default App;
