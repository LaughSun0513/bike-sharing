import React from 'react';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/home';
import NoMatch from './pages/nomatch';
import UIButton from './pages/ui/buttons.js';
import UIModal from './pages/ui/modals.js';
import UILoading from './pages/ui/loadings.js';
import UINotification from './pages/ui/notification.js';
import UIToast from './pages/ui/toasts.js';
import UITab from './pages/ui/tabs.js';
import Admin from './admin';

export const IRouter = () => {
    return (
      <Router>
          <Route path="/" render={()=>
              <Admin>
                  <Switch>
                    <Route path='/admin/home' component={Home}/>
                    <Route path='/admin/ui/button' component={UIButton}/>
                        <Route path='/admin/ui/modal' component={UIModal} />
                        <Route path='/admin/ui/loading' component={UILoading} />
                        <Route path='/admin/ui/notification' component={UINotification} />
                        <Route path='/admin/ui/toast' component={UIToast} />
                        <Route path='/admin/ui/tab' component={UITab} />
                    <Route component={NoMatch}/>
                  </Switch>
              </Admin>
          }/>
      </Router>
    )
}
