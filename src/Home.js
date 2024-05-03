import React, { useState } from 'react';

function Home() {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName('');
    } else {
      if (userName.trim()) {
        setIsLoggedIn(true);
      } else {
        alert('Please enter your name.');
      }
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome {userName}</h1>
      ) : (
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
      )}
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Home;
