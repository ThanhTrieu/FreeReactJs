import {DECREMENT_NUMBER, INCREMENT_NUMBER} from './const';

// dinh nghia hanh dong cua users
// pure object
export const decrementNumber = (val) => ({
  type: DECREMENT_NUMBER,
  val
})

export const incrementNumber = (val) => ({
  type: INCREMENT_NUMBER,
  val
})