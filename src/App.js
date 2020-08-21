import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import SecretPage from './pages/SecretPage.js';
import TopBar from './components/TopBar.js';

function App() {

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/secret/:id" component={SecretPage}/>
      </Switch>
    </Router>
  );
}

export default App;
