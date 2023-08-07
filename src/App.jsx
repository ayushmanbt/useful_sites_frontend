import React from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SecretPage from './pages/SecretPage.jsx';
import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';
import { useSelector } from 'react-redux';

function App() {

  const theme = useSelector(state => state.theme.theme);


  return (
    <Router>
      <div className={`pageLayout ${theme}`}>
        <TopBar />
        <div className="pageContent">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/secret/:id" component={SecretPage}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
