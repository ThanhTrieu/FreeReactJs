// noi nay dinh nghia cac selector lay du lieu ra tu store 
import { createSelector } from 'reselect'

// can lay ra state 
const counterState = state => state.counter;

// lay state con trong trong state trong ben tren
export const countReselect = createSelector(
  counterState,
  item => item.count
)