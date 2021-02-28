import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Inicio } from './Inicio';
import { About } from './About';
import { Notas } from './Notas';
import { NavBar } from './NavBar';

import '../styles/App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" component={ Inicio } />
          <Route path="/acerca" component={ About } />
          <Route path="/notas" component={ Notas } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
