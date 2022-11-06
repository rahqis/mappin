<<<<<<< HEAD
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
=======
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/login";
import Maps from "./components/maps";
import Form from "./components/signup";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
    else navigate("/signin");
  }, [user, loading]);

  return (
    <div className='App'>
      <Maps />
>>>>>>> created backend api, maps to get events
    </div>
  );

}

export default App;
