import React from 'react';

function BoilingVerdict(pros){

if(pros.celcuius >=100){
  return <p> The water would boil </p>
}
return <p>The water would not boil</p>

}


export default BoilingVerdict;