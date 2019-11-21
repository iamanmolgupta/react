import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Param from './Param'

function Main(){
return(
<main>

<Switch>
<Route exact path ='/compo1' component={Component1} />
<Route path = '/compo2' component = {Component2} />
<Route path = '/compo3' component ={Component3} />
<Route path = '/compo1/:num' component = {Param} />
</Switch>

</main>
)
}


export default Main


