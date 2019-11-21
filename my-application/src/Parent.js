import React from 'react';
import Child from './Child'
class Parent extends React.Component{
constructor(props){
super(props)
this.state={name:'hello',value1:''}
}

handleChange=(e)=>{
  this.setState({value1 : e.target.value})
}

handleSubmit=(e)=>{
this.setState({name:this.state.value1})
// console.log("parent:"+this.state.name)
}


render(){

return(
<div>
  <input type = 'text'onChange={this.handleChange}/>
  <button onClick = {this.handleSubmit} >click me </button>
  <Child name = {this.state.name} />  
</div>
)

}

}

export default Parent;
