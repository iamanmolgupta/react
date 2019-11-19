import React from 'react';


const scaleNames ={
  c:'celcius',
  f:'fahrenheit'
};


class TemperatureInput extends React.Component{
constructor(pros){
super(pros)
this.state  = {temperature:''};
}

handleChange=(e)=>{
  this.setState({temperature :e.target.value});
}

  render(){
    return(
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[this.props.scale]}</legend>
          <input value = {this.state.temperature} onChange = {this.handleChange}/>
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput; 