import React from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/nomatch';
import UIButton from './pages/ui/button';

import Admin from './admin';

export const IRouter = () => {
    return (
      <Router>
          <Route path="/" render={()=>
              <Admin>
                  <Switch>
                    <Route path='/admin/home' component={Home}/>
                    <Route path='/admin/ui/button' component={UIButton}/>
                    <Route component={NoMatch}/>
                  </Switch>
              </Admin>
          }/>
      </Router>
    )
}
