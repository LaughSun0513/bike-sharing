import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './index.scss'
export default class UILoading extends React.Component {

  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin用法" className="card-warp">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
        </Card>
        <Card title="内容遮罩" className="card-warp">
          <Alert
            message="React"
            description="欢迎来到React高级实战课程"
            type="info"
            style={{ marginBottom: 10 }}
          />
          <Spin>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}