import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Colors from './components/colors/colors';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Colors/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
