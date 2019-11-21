import React from 'react'
import { Link } from 'react-router-dom';

class Component1 extends React.Component{
 constructor(props){
 super(props)
this.state={players:[{num:1,name:'anmol'},{num:2,name:'puru'},{num:3,name:'rajat'},{num:4,name:'shubham'},{num:5,name:'naveen'}]}


 }
render(){ 
return( 
  <div>
    <ul>
   {this.state.players.map(n=>(
     <li key = {n.num}>
       <Link to = {`/compo1/${n.name}`}>{n.num}</Link>
     </li>
   ))}

    </ul>
  </div>

)
}
}
export default Component1;