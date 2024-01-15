import React, { useState } from 'react'
    //PROPS <FIRST prop1="" prop2="">       this is during declaration


//while defination 
//function First(props){   props.prop1   props.prop2}
//or function First({prop1,prop2}){   prop1   prop2}
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
    <h2 className='bg-green-400'> {num}</h2>
   </div>
  )
}

export default First;