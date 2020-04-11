import React from 'react';

const ButtonDecrement = (props) => {
  console.log(props);
  return(
    <>
      {/* comment */}
      {/* JSX */}
      <button onClick={() => props.click(props.count)}>{props.children}</button>
    </>
  )
}
export default React.memo(ButtonDecrement);