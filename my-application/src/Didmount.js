import React from 'react';
const axios = require('axios');

class App extends React.Component{
constructor(){
super()
this.state = {signup:'',msg:'',err:'',data:[],uname:''}
}
componentDidMount(){
axios.post("http://localhost:8080/",this.state).then((response)=>{this.setState({data:response.data})});
}

handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name] : value});
    
}
handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8080/user",this.state).then((response) =>{this.setState({signup:response.data})})
  if(this.state.signup === 'Email id already exist'){
    this.setState({err:this.state.signup})
  }
  else{
    this.setState({msg:this.state.signup})
  }


}

handleSubmitForm=(e)=>{
  e.preventDefault();
  console.log(this.state.emid)
  axios.post("http://localhost:8080/getinfo",this.state).then((response) =>{this.setState({uname:response.data})})
  axios.post("http://localhost:8080/",this.state).then((response)=>{this.setState({data:response.data})});

}
render(){

return(
  
 <div>
   {console.log(this.state.data)}
   <h1>Sign up form</h1>
   <form onSubmit = {this.handleSubmit}>
        uname1:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name = "uname1" required/><br></br>
        emid:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name ="emid" required/><br></br>
        {this.state.err}<br></br>
        pass1:<br></br>
        <input type = 'password' onChange = {this.handleChange}  name = "pass1" required/><br></br>
        <input type ="submit"/>
    </form>
   

<p>{this.state.msg}</p>
    {/* <h1>Login user</h1>
    <form onSubmit = {this.handleSubmitForm}>
    uname1:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name = "uname1" required/><br></br>
        emid:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name ="emid" required/><br></br>
        pass1:<br></br>
        <input type = 'password' onChange = {this.handleChange}  name = "pass1" required/><br></br>
        <input type ="submit"/>
    </form> */}
        <h1>Add user</h1>
    <form onSubmit = {this.handleSubmitForm}>
    uname1:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name = "uname1" required/><br></br>
        emid:<br></br>
        <input type = 'text'onChange = {this.handleChange}  name ="emid" required/><br></br>
        pass1:<br></br>
        <input type = 'password' onChange = {this.handleChange}  name = "pass1" required/><br></br>
        <input type ="submit"/>
    </form>
    <p>{this.state.login}</p>

    <h1>{this.state.data.length>0 ? this.state.data.map((user)=>{
          return (<div> 
            <p>{user.uname1}</p>
          </div>)
        }):<h1></h1>}</h1>
        <div><h1><p>{this.state.uname}</p></h1></div>
 </div>

)
}
}
export default App;