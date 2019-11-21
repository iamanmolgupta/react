import React from 'react'

class Component2 extends React.Component{
 constructor(props){
 super(props)
 console.log(this.props)


 }
render(){ 
return( 
  <div>
    <h1>Hello, Component2</h1>
  </div>

)
}
}
export default Component2;