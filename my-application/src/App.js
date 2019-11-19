import React from 'react';
const axios = require('axios');


class App extends React.Component{
constructor(){
  super()
  this.state ={uname1 : '',emid : '',pass1:'',data:''}
}

handleChange=(e)=>{
const name = e.target.name;
const value = e.target.value;
this.setState({[name] : value});

}

handleSubmit=(e)=>{
  e.preventDefault();
axios.post("http://localhost:9081/user",this.state).then((response) =>{this.setState({data:response.data})})
console.log(this.state.data);

  //   console.log(this.state.uname)
// console.log(this.state.email)
// console.log(this.state.pass)
}

  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
        uname1:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name = "uname1"/><br></br>
        emid:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name ="emid"/><br></br>
        pass1:<br></br>
        <input type = 'password' onChange = {this.handleChange}  name = "pass1"/><br></br>
        <input type ="submit"/>
        </form>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default App;