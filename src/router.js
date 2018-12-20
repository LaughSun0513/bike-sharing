import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import Home from './pages/homePages';

import Admin from './admin';

export const IRouter = () => {
    return (
      <Router>
          <Route path="/admin" render={()=>
              <Admin>
                  <Route path='/admin/home' component={Home}/>
              </Admin>
          }/>
      </Router>
    )
}
