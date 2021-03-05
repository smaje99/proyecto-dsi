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
import { Thematic } from './Thematic';

import '../styles/App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/acerca" component={ About } />
          <Route path="/notas" component={ Notas } />
          <Route path="/" component={ Inicio } exact />
          <Route path="/intro/tda" component={ Thematic } />
          <Route path="/intro/modularidad" component={ Thematic } />
          <Route path="/intro/recursividad" component={ Thematic } />
          <Route path="/intro/arreglos" component={ Thematic } />
          <Route path="/intro/nodos" component={ Thematic } />
          <Route path="/algoritmos/ordenamiento" component={ Thematic } />
          <Route path="/algoritmos/busqueda" component={ Thematic } />
          <Route path="/lineal/pilas" component={ Thematic } />
          <Route path="/lineal/colas" component={ Thematic } />
          <Route path="/lineal/listas" component={ Thematic } />
          <Route path="/no-lineal/arboles" component={ Thematic } />
          <Route path="/no-lineal/grafos" component={ Thematic } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
