import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

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
    <Container>
      {isLoggedIn ? (
        <h1>Welcome {userName}</h1>
      ) : (

        <input className='input'
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
      )}
      <Button variant="secondary" onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
      

       
      
     
      </Container>
  );
}

export default Home;
