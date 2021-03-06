import React from 'react';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Menu/Home';
import { DoctorList } from './components/DoctorList/DoctorList';
import { AddDoctor } from './components/AddDoctor/AddDoctor';
import AddDetails from './components/AddDoctor/AddDetails';
import AddTiming from './components/AddDoctor/AddTiming';
import NewDoctorList from './components/NewDoctorList/NewDoctorList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/doctor-list" component={DoctorList} />
              <Route path="/add-doctor" exact component={AddDoctor} />
              <Route path="/add-doctor/step1" component={AddDetails} />
              <Route path="/add-doctor/step2" component={AddTiming} />
              <Route path="/newly-added-doctors" component={NewDoctorList} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
