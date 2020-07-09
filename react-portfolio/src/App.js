import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './routes/Home';

import './App.css';

function App() {

  return(
    <Router>  
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
    </Router>
  )
}

export default App;
