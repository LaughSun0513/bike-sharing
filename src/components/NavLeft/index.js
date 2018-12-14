import React,{Component} from 'react';
import { Layout,Menu} from 'antd';
import {menuList} from './dataSource';
import './index.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    componentWillMount(){
      const menuDom = this.renderMenu(menuList);
      this.setState({
          menuDom
      })
    }
    renderMenu(List){
      return List.map(item=>{
        if(item.children){
          return (
            <SubMenu title={item.title} key={item.key}>
              {this.renderMenu(item.children)}
            </SubMenu>
          )
        }else{
          return (
            <Menu.Item key={item.key}>{item.title}</Menu.Item>
          )
        }
      })
    }
    render(){
      return (
          <Sider
            trigger={null}
            collapsible
            className='navLeft'
          >
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
              {this.state.menuDom}
            </Menu>
          </Sider>
      )
    }
}
