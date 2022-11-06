import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import  Register from "./components/Register";
import MakeEvent  from "./components/makeEvent";
import Maps from './components/maps';
import Login from './components/Login';

import Navbar from './components/Navbar';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );

}

export default App;
