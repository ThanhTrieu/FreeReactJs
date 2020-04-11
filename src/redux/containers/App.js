import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import ButtonIncrement from '../components/ButtonIncrement';
import ButtonDecrement from '../components/ButtonDecrement';
import Result from '../components/Result';
import {decrementNumber, incrementNumber} from '../actions/action'
import {countReselect} from '../reselect/counterReselect'

const AppCounter = () => {
  //createStructuredSelector :  reuturn object
  const {count} = useSelector(createStructuredSelector({
    count: countReselect
  }))

  // kien thuc cua js
  //const {a, b} = {a : 'a10',b : 'b10'}
  // console.log(a)
  //const [x,y,z] = [10,20,30];

  const dispatch = useDispatch();

  const decrement = (val) => {
    dispatch(decrementNumber(val))
  }

  const increment = (val) => {
    dispatch(incrementNumber(val))
  }
  return(
    <>
      <ButtonIncrement
        click={(count) => dispatch(incrementNumber(count))}
        count={count}
        > - </ButtonIncrement>
        <ButtonDecrement
          click={(count) => dispatch(decrementNumber(count))}
          count={count}
        > + </ButtonDecrement>
        <Result result={count}/>
    </>
  )
}

export default AppCounter;

/*
class AppCounter extends React.PureComponent {
  render(){
    return(
      <>
        <ButtonIncrement
          count={this.props.count}
          click={this.props.increment}
        > - </ButtonIncrement>
        <ButtonDecrement
          count={this.props.count}
          click={this.props.decrement}
        > + </ButtonDecrement>
        <Result result={this.props.count}/>
      </>
    )
  }
}

// truyen du lieu -state thong qua prorps cho component
// trong du an thuc te tao ra selecttor de lay sate
// const mapStateToProps = state => ({
//   count: state.counter.count
// })

const mapStateToProps = createStructuredSelector({
  count: countReselect
})
// lay action thong props truyen vao component
const mapDispatchToProps = dispatch => ({
  decrement: (val) => dispatch(decrementNumber(val)),
  increment: (val) => dispatch(incrementNumber(val))
})
// connect len component

export default connect(mapStateToProps, mapDispatchToProps)(AppCounter);
*/