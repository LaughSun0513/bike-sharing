import React,{Component} from 'react';
import { Layout,Row,Col } from 'antd';
import moment from 'moment';
import './index.scss';

const { Header } = Layout;


export default class MyHeader extends Component{
    state={}
    componentWillMount(){
      setInterval(()=>{
        let currentDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            currentDate
        })
      },1000)
    }
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
                <span className='date'>{this.state.currentDate}</span>
                <span>下雪</span>
            </Col>
          </Row>

        </Header>
      )
    }
}
