import React from 'react';
import './App.css';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ToDo from './components/ToDo';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <ToDo />
    </div>
    </Provider>
  );
}

export default App;
