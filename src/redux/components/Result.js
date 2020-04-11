import React from 'react';

const Result = (props) => {
  return(
    <>
      {/* comment */}
      {/* JSX */}
      <h3>{props.result}</h3>
    </>
  )
}
export default React.memo(Result);