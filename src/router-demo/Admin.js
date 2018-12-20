import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Admin extends Component{
    render(){
      return (
        <div>
          父级路由的内容
          <Link to='/admin/sub'>点开子路由</Link>
          {this.props.children}
        </div>
      )
    }
}
