import React,{Component} from 'react';
import { Layout } from 'antd';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.scss';

const {Content} = Layout;
export default class Admin extends Component{
    render(){
      return (
        <Layout className='app-left'>
          <NavLeft/>
          <Layout className='app-right'>
            <MyHeader/>
            <Content className='content'>
              {this.props.children}
            </Content>
            <MyFooter/>
          </Layout>
        </Layout>
      )
    }
}
