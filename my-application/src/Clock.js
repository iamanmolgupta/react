import React from 'react';
import Child from './Child';
const axios = require('axios');


class Clock extends React.Component{
constructor(props){
  super(props)
  this.state={uname1:'',emid:'',pass1:''};
  console.log("parent constructor");
}
static getDerivedStateFromProps(props,state){
  console.log("parent gdsfp");
  return null
}

componentDidMount(){
// this.timer = setInterval(()=>this.tick(),1000);
this.formdata();
console.log("parent did mount")
}

componentDidUpdate(prevState){
  // this.timer = setInterval(()=>this.tick(),1000);

  //  
   console.log("parent did update")
}

formdata=(e)=>{

axios.post("http://localhost:8080/user",this.state).then((response) =>{console.log(response.data)})
console.log(this.state.uname1)
}
// tick = ()=>{
//   this.setState({date : new Date()})
// }
render(){
  console.log("parent render")
return(
<div>
  {this.state.uname1}
  <Child />
</div>
)
}
}
export default Clock;