import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') { 
      navigate('/home');
    
    } else {
      console.error('Wrong username or password. Please try again');
    }
  };
  
  return (
    <div className='login'>
    <div className="container-1">
      <h2>HI, LOGIN</h2>
      <form>
        <label>Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>LOGIN</button>
      </form>
    </div>
    </div>
  );
};

export default Login;