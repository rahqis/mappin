import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle
} from "../firebase";
import "./app.css";

export default function Form() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  //   useEffect(() => {
  //     if (loading) return;
  //     if (user) navigate("/dashboard");
  //   }, [user, loading]);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      //   setError(true);
    } else {
      setSubmitted(true);
      //   setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className='success'
        style={{
          display: submitted ? "" : "none"
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  //   const errorMessage = () => {
  //     return (
  //       <div
  //         className='error'
  //         style={{
  //           display: error ? "" : "none"
  //         }}
  //       >
  //         <h1>Please enter all the fields</h1>
  //       </div>
  //     );
  //   };

  return (
    <div className='form'>
      <div>
        <h1>User Registration</h1>
      </div>
      <div className='register__container'>
        <form>
          <input
            type='text'
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full Name'
          />
          <input
            type='text'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail Address'
          />
          <input
            type='password'
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button className='btn' onClick={register}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
