import React from 'react';
import { Provider } from 'react-redux'
import Counter from './containers/App';
import store from './store/configStore';


const AppCounter = () => {
  return(
    <>
      <Provider store={store}>
        <Counter/>
      </Provider>
      
    </>
  )
}

export default AppCounter;