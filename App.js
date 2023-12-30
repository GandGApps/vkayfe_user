import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from "react-redux";
import store from "./src/store";
import MyApp from "./src/myApp";

function App() {
  return (
   <Provider store={store}>
     <MyApp/>
   </Provider>
  );
}
export default App;
