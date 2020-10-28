import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Frameworks from './containers/Frameworks/Frameworks';
import Users from './containers/Users/Users';
import pageNotFound from './Component/pageNotFound';
import './App.css';

class App extends Component {
  render () {
    return (
        <div className="App">

          <nav className="Nav">
              <li>
                <NavLink to='/frameworks' exact >Frameworks</NavLink>
              </li>
              <li>
                <NavLink to='/users'>Users</NavLink>
              </li>
          </nav>

            <Switch>
              <Route path='/frameworks' component={Frameworks} />
              <Route path='/users' component={Users} />
              <Redirect from='/all-frameworks' to='/frameworks' />
              <Route component={pageNotFound} />
            </Switch>

        </div>
    );
  }
}

export default App;


