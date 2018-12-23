import React,{Component} from 'react';
import {Card,Button,Radio} from 'antd';
import './index.scss';


export default class UIButton extends Component{
    state={
      size:'default'
    }
    handleChange = (e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render(){

      return (
        <div className='button-container'>
            <Card title="基础按钮" className='card-warp'>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
              <Button disabled>Default(disabled)</Button>
            </Card>
            <Card title="图标按钮" className='card-warp'>
              <Button icon='plus'>创建</Button>
              <Button icon='edit'>编辑</Button>
              <Button icon='delete'>删除</Button>
              <Button icon='search' shape='circle'/>
              <Button icon='search' type='primary'>搜索</Button>
              <Button icon='download' type='primary'>下载</Button>
            </Card>
            <Card title="Loading按钮" className='card-warp'>
                <Button type="primary" loading>确定</Button>
                <Button type="primary" shape="circle" loading></Button>
                <Button loading>点击加载</Button>
                <Button shape="circle" loading></Button>
                <Button type="primary">关闭</Button>
            </Card>
            <Card title="按钮组"  className='card-warp'>
                <Button.Group>
                    <Button type="primary" icon="left">返回</Button>
                    <Button type="primary" icon="right">前进</Button>
                </Button.Group>
            </Card>
            <Card title="按钮尺寸" className='card-warp'>
                <Radio.Group value={this.state.size} onChange={this.handleChange}>
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Radio.Group>
            </Card>
        </div>
      )
    }
}
