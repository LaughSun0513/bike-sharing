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
    handleShowModal = (type) =>{
        this.setState({
          [type]:true
        })
    }
    handleClose = (type) =>{
      this.setState({
        [type]:false
      })
    }
    handleModal = (type) => {
      Modal[type]({
        title: `当前为${type}类型的弹框`
      })
    }
    render(){
      const {showModal1,showModal2,showModal3,showModal4} = this.state;
      return (
        <div className='modal-container'>
          <Card title="基础模态框" className='card-warp'>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal1')} >Open</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal2')}>自定义页脚</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal3')}>顶部20px</Button>
              <Button type="primary" onClick={()=>this.handleShowModal('showModal4')}>水平垂直居中</Button>
          </Card>
          <Card title="信息确认框" className='card-warp'>
              <Button type="primary" onClick={() => this.handleModal('confirm')}>confirm</Button>
              <Button type="primary" onClick={() => this.handleModal('info')}>info</Button>
              <Button type="primary" onClick={() => this.handleModal('success')}>success</Button>
              <Button type="primary" onClick={() => this.handleModal('warning')}>warning</Button>
          </Card>
          <Modal
            title='Open'
            visible={showModal1}
            onOk={() => this.handleClose('showModal1')}
            onCancel={() => this.handleClose('showModal1')}
          >
            <p>我是内容</p>
          </Modal>
          <Modal
            title='自定义页脚'
            visible={showModal2}
            onOk={() => this.handleClose('showModal2')}
            onCancel={()=>this.handleClose('showModal2')}
          >
            <p>我是内容</p>
          </Modal>
          <Modal
            title='顶部20px'
            style={{top:20}}
            visible={showModal3}
            onOk={() => this.handleClose('showModal3')}
            onCancel={()=>this.handleClose('showModal3')}
          >
            <p>我是内容</p>
          </Modal>
          <Modal
            title='水平垂直居中'
            visible={showModal4}
            onOk={() => this.handleClose('showModal4')}
            onCancel={()=>this.handleClose('showModal4')}
          >
            <p>我是内容</p>
          </Modal>
        </div>
      )
    }
}
