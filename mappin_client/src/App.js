import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import  Login from "./components/Login";
import  Register from "./components/Register";
import MakeEvent  from "./components/makeEvent";

function App() {
  return (<MakeEvent/>);
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
  //   <div className="App">
  //     {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  //     }
  //   </div>
  // );
}

export default App;
