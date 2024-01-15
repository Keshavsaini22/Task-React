import React, { useState } from 'react'

function First() {
  
  const [num,setnum]=useState();
  
   function handleadd(){}
   function handlesub(){}
  return (
   <div>
    <button onClick={handleadd}> Press me to add </button>
    <button onClick={handlesub}> Press me to sub</button>
   </div>
  )
}

export default First;