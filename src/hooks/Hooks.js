import React, {useState} from 'react';

const AppHook = () => {
  // khai bao state va cac ham xu ly sate
  const [count, changeCounter] = useState(0);
  const [count2, changeCounter2] = useState(0);

  const setCounter = () => {
    changeCounter(count + 1)
  }
  
  return(
    <>
        <h3>{count}</h3>
        <button onClick={()=> setCounter()}> +1</button>
        <br/>
        <h3>{count2}</h3>
        <button onClick={()=>changeCounter2(count2 - 1)}> -1</button>
    </>
  )
}

export default AppHook;