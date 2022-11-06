import { useState } from 'react';


export default function Register(props) {
    const [username,setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
      }

    return (
        <div className="auth-form-container">
          <h1>Mappin</h1>
          <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor= "Email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}email="email" id="email" placeholder= "youremail@domain.com"/>
          <label htmlFor="Username">username</label>
          <input value={username}  onChange={(e) => setUsername(e.target.value)} username= "username" placeholder = "Username"/>
          <label htmlFor="password">password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password" placeholder = "***********" id="password" name="password"/>
          <button type="submit">Sign Up</button>
        </form>
        <button className= "link-btn" onClick= {() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )

}
