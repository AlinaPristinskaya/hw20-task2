import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import about1 from './images/about1.webp';
import about2 from './images/about2.webp';
function About() {
 
  return (<div>
    <Image src={about2} fluid />
    <Container>


<Image src={about1} fluid />
  
      <p>Contact Us at: contact@store.com</p>
      </Container>
      </div>
  );
}

export default About;
