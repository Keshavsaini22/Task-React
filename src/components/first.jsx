import React, { useState } from 'react'

function First() {
  
  let [num,setnum]=useState(0);
  
   function handleadd(){
      
      if(num<20) num+=1;
      else num=0
      setnum(num)
   }
   function handlesub(){
    if(num>0)   num-=1;
    else num=0;
  
    setnum(num)
   }
  return (
   <div>
    <button onClick={handleadd}> Press me to add</button>
    <button onClick={handlesub}> Press me to sub</button>
    <h2> {num}</h2>
   </div>
  )
}

export default First;