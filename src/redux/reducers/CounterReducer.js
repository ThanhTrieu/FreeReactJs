// noi xu ly - cap nhat state
// nhan dc action tuong ung
import {DECREMENT_NUMBER, INCREMENT_NUMBER} from '../actions/const';

// dinh nghia state mac dinh
// this.state = {count :0}

const stateDefault = {
  count: 0
}

const counter = (state = stateDefault, action) => {
  switch (action.type) {
    case DECREMENT_NUMBER:
      return {
        // mutable
        // imuatable
        ...state,
        ...{
          count: action.val + 1
        }
      }
    case INCREMENT_NUMBER: 
      return {
        ...state,
        ...{
          count: action.val - 1
        }
      }
    default:
      return state
  }
}

export default counter;
