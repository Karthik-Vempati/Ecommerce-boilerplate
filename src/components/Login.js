import React from 'react';
import Header from './Header';
import {useState} from 'react';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    //login function
    const login = (e) =>{
        e.preventDefault();
        const user = {
            email,
            password,
        };
        localStorage.setItem('token-info',JSON.stringify(user));
        setIsLoggedIn(true);
        setEmail('');
        setPassword('');
    };

    const logout = () =>{
        localStorage.removeItem('token-info');
        setIsLoggedIn(false);
    };

  return (
      <div>
        
        
        {!isLoggedIn ? (
            <>
            <h1>Login</h1>
                <form action="">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Address"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                <a>New User? Create an account</a>
                <button type="submit" onClick={login}>Submit</button>
                </form>
            </>
        ): (
            <>
            <Header />
                <h1>User Logged In</h1>
                <button onClickCapture={logout}>logout user</button>
            </>
  )}
    </div>
  ) 
}

export default Login;