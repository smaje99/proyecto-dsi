import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Inicio } from './Inicio';
import { About } from './About';
import { Notas } from './Notas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Inicio } />
        <Route path="/info" component={ About } />
        <Route path="/notas" component={ Notas } />
      </Switch>
    </Router>
  );
}

export default App;
