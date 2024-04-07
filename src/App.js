import './App.css';

import {useState} from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      {error && <h2 style={{color: 'red'}}>{error}</h2>}
    </div>
  );
}
