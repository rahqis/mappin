<<<<<<< HEAD
import React, { useState } from "react";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
          <h1>Mappin</h1>
          <h2>Log In</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="Username">username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}  username= "username" placeholder = "Username"/>
          <label htmlFor="password">password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password" placeholder = "***********" id="password" name="password"/>
          <button type="submit">Sign Up</button>
        </form>
        <button className= "link-btn" onClick= {() => props.onFormSwitch('register')}>Dont have an account? Register here.</button>
        </div>
=======
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/main");
  }, [user, loading]);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  // Find user login info
  //const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form>
        <div className='input-container'>
          <label>Email </label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail Address'
            required
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className='button-container'>
          <button
            className='button-container'
            type='submit'
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>
      </form>
      <p>
        Don't have an account?
        <Link to='../signup'>Sign up!</Link>
      </p>
    </div>
  );
}
>>>>>>> created backend api, maps to get events

    )
}