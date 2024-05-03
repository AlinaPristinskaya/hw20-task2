import React from 'react';
import { Figure } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="./images/logo.jpeg"
        />
        <Figure.Caption>
        Beautiful hostess online store - curtains and rugs in the bathroom, tablecloths, mops and much more
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="path/to/image1.jpg"
        />
        <Figure.Caption>
          First Store Image.
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="path/to/image2.jpg"
        />
        <Figure.Caption>
          Second Store Image.
        </Figure.Caption>
      </Figure>
      <p>Contact Us at: contact@store.com</p>
    </div>
  );
}

export default About;
