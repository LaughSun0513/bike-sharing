import React,{Component} from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Footer } = Layout;
export default class MyFooter extends Component{
    render(){
      return (
        <Footer className='footer'>
          Footer
        </Footer>
      )
    }
}
