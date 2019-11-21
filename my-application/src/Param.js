import React from 'react';

class Param extends React.Component{
constructor(props){
  super(props)

}

render(){

return (
  <div>
<h1>{this.props.match.params.num}</h1>
  </div>
)
}
}

export default Param;