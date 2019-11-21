import React from 'react';

class Child extends React.Component{
constructor(props){
super(props)
this.state ={age : 24}
}

static getDerivedStateFromProps(props, state){
console.log("properties:"+props.name);
console.log("status:"+state.age);
return null;
}

render(){
  return(
    <div>
<p>{this.props.name}</p>
    </div>
  )
}

}
export default Child; 