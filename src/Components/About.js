import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import about1 from "./images/about1.webp";
import banner from "./images/banner.jpg";
import TotalPrice from "./TotalPrice";
import { Price } from "../PriceContext";

function About() {
  const data = useContext(Price);
  return (
    <div>
      <div style={{ position: "fixed", top: "10px", right: "10px" }}>
        <TotalPrice price={data.basket} />
      </div>
      {/* The banner image has been moved to a container to ensure consistency */}
      <Container>
      <Image src={banner} fluid />
        <h3>Store Description</h3>
        <h4>
          online store - curtains and mats in the bathroom, tablecloths, mops
          and much more
        </h4>
        <Image src={about1} fluid />
        <p>Contact Us at: contact@store.com</p>
      </Container>
    </div>
  );
}

export default About;
