import React,{Component} from 'react';


export default class Top extends Component{
    render(){
      return (
        <div>
          this is Top;
          参数为:{this.props.match.params.id}
        </div>
      )
    }
}
