import React from 'react';

class Clock extends React.Component{
constructor(props){
  super(props)
  this.state={date : new Date()};
}

componentDidMount(){
this.timer = setInterval(()=>this.tick(),1000);
console.log("didmount")
}

tick = ()=>{
  this.setState({date : new Date()})
}
componentWillUnmount(){
clearInterval(this.timer);
console.log("unmount")
}

render(){

return(
<div>
  <h1>Manju wake up</h1>
  <h2>{this.state.date.toLocaleTimeString()}</h2>
</div>

)
}

}

export default Clock;