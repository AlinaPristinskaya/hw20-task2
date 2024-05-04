import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Price } from "./PriceContext";

function App() {
  const data = useContext(Price);
  console.log(data);
  return (
    <Router>
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products">Products</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products price={data.updateBasket} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
