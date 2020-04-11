import React, {useState, useEffect} from 'react';

const EffectHooks = () => {
  const [count, setCounter] = useState(0);
  const changeCount = () => {
    setCounter(count + 1)
  }

  // useEffect : xu ly dc cac cong viec gan giong nhu lifeClye ben class component

  // muon xy ly nhu componentDidMount ben class
  useEffect(() => {
    changeCount();
  },[]) // mang rong
  // useEffect luon luon la 1 ham xu ly dong bo
  // mag co tham so truyen vao no giong componentDidUpdate

  // useEffect(() => {
  //   changeCount();
  // },[]) 

  // useEffect(() => {
  //   changeCount();
  // },[]) 

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=> changeCount()}>+1</button>
    </>
  )
}

export default EffectHooks;