import React,{Component} from 'react';
import {Card,Button,Modal} from 'antd';
import './index.scss';

export default class UIModal extends Component{
    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
     handleShowModal=(type)=>{
        this.setState({
          [type]:true
        })
    }
    handleClose=(type)=>{
      this.setState({
        [type]:false
      })
    }
    render(){
      const {showModal1,showModal2,showModal3,showModal4} = this.state;
      return (
        <div className='modal-container'>
            <Card title="基础模态框" className='card-warp'>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal1')}>Open</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal2')}>自定义页脚</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal3')}>顶部20px</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal4')}>水平垂直居中</Button>
            </Card>
            <Modal
              title='Open'
              visible={showModal1}
              onCancel={()=>this.handleClose('showModal1')}
            />
            <Modal
              title='Open'
              visible={showModal2}
              onCancel={()=>this.handleClose('showModal2')}
            />
            <Modal
              title='Open'
              visible={showModal3}
              onCancel={()=>this.handleClose('showModal3')}
            />
            <Modal
              title='Open'
              visible={showModal4}
              onCancel={()=>this.handleClose('showModal4')}
            />
        </div>
      )
    }
}
