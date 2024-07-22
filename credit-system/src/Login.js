import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlashMessage } from './FlashMessageContext';
import './Login.css';

const predefinedUsername = 'user';
const predefinedPassword = 'password';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const showMessage = useFlashMessage();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === predefinedUsername && password === predefinedPassword) {
      onLogin();
      showMessage('Daily Login\n10 credit points earned', 10000); // Updated duration to 10 seconds
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
