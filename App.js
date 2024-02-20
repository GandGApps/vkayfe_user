import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import MyApp from './src/myApp';
import {
  requestUserPermission,
  notificationListener,
} from './src/helper/notificationServices.js';
import ForegroundHandler from './src/helper/ForegroundHandler';

function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <Provider store={store}>
      <ForegroundHandler />
      <MyApp />
    </Provider>
  );
}

export default App;
