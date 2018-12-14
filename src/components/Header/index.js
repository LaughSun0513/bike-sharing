import React,{Component} from 'react';
import { Layout,Row,Col } from 'antd';
import './index.scss';

const { Header } = Layout;
export default class MyHeader extends Component{
    render(){
      return (
        <Header className='header'>

          <Row className='header-top'>
              <span>LaughSun</span>
              <a href="#">退出</a>
          </Row>

          <Row className='header-bottom'>
            <Col span='4' className='breadcrumb'>
              <span className='breadcrumb-title'>首页</span>
            </Col>
            <Col span='20' className='detail'>
                <span className='date'>2018-12-12</span>
                <span>下雪</span>
            </Col>
          </Row>

        </Header>
      )
    }
}
