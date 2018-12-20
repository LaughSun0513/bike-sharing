import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component{
    render(){
      return (
          <div>
            <ul>
                <li>
                  <Link to='/admin'>Admin</Link>
                </li>
                <li>
                  <Link to='/top'>Top</Link>
                </li>
            </ul>
              {this.props.children} 
          </div>
      )
    }
}
