import React,{Component} from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home.js';   // 加载首页的父路由
import Admin from './Admin.js'; //父路由的内容
import About from './About.js'; //子路由的内容
import Top from './Top.js';
import Nomatch from './Nomatch.js';

export default class IRouter extends Component{
    render(){
      return (
        <Router>
            <Home>
              <Switch>
                <Route path='/admin' render={()=>
                    <Admin>
                        <Route path='/admin/sub' component={About}/>
                    </Admin>
                }/>
                <Route path='/top/:id' component={Top}/>
                <Route component={Nomatch}/>
              </Switch>
            </Home>
        </Router>
      )
    }
}
