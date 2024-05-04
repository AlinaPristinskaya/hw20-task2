import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Home() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName("");
    } else {
      if (userName.trim()) {
        setIsLoggedIn(true);
      } else {
        alert("Please enter your name.");
      }
    }
  };

  return (
    <Container>
      {isLoggedIn ? (
        <h1>Welcome {userName}</h1>
      ) : (
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="secondary" onClick={handleLoginLogout}>
            Login
          </Button>
        </InputGroup>
      )}
      {isLoggedIn && (
        <Button variant="secondary" onClick={handleLoginLogout}>
          Logout
        </Button>
      )}
    </Container>
  );
}

export default Home;
