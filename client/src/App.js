import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
      <div className="container">
        <Switch>
          <Route exact path = '/' component={Home}></Route>
          <Route exact path = '/about' component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
