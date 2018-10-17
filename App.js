import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configStore';
import NavigationControoler from './components/NavigationController';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationControoler />
    </Provider>
  )
}

export default App;





