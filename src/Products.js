import React, { useState } from 'react';
import { Button, Card, Dropdown } from 'react-bootstrap';

const products = [
  // Add your product objects here
  // Example product
  {
    id: 1,
    title: "Carpit",
    description: "A set of mats in the bathroom and toilet are made of soft, fluffy and pleasant to the touch microfiber. Visually similar to towels. The pile is not high, about 5 mm. Dimensions - rectangular 80*50 cm and rectangular with a cut-out for the toilet 40*50. The base is made of silicone point, does not slide on the floor. Carpets absorb a lot of water and dry quickly. Automatic washing is allowed.",
    price: 46,
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: 2,
    title: "Product 1",
    description: "This is Product 1",
    price: 96,
    colors: ["Red", "Blue", "Green"]
  },
  {id: 3,
  title: "Shtora",
  description: "Water-repellent fabric curtain for the bathroom. Size 180*200 cm, manufacturer Tropichome, Turkey. Designer colors of Tropichome will create a wow effect in your bathroom. Excellent quality, full color printing. Soft and pleasant to the touch, quick drying. Very easy to care for - it can be washed in a washing machine and ironed. On the upper edge, a double bend with holes for rings. Rings are not included! They can be purchased additionally.",
  price: 74,
  colors: ["Red", "Blue", "Green"]
},
  {
    id: 4,
    title: "BathMat",
    description: "This rug is placed either on the floor or directly in the bath or shower. Made of silicone - a material that does not absorb water. Thanks to the suction cups on the back side of the mat, they are securely fixed and will not allow them to slip. Caring for such rugs is very easy. It is enough to dry it after bathing and periodically wash it with a rag and disinfectants.",
    price: 86,
    colors: ["Red", "Blue", "Green"]
  },
  // Add at least 9 more products
];

function Products() {
  const [selectedColor, setSelectedColor] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuy = (price) => {
    setTotalPrice(prevPrice => prevPrice + price);
  };

  return (
    <div>
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="path/to/your/image.jpg" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
              Price: ${product.price}
            </Card.Text>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedColor[product.id] || 'Choose Color'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product.colors.map(color => (
                  <Dropdown.Item key={color} onClick={() => setSelectedColor({...selectedColor, [product.id]: color})}>
                    {color}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary" onClick={() => handleBuy(product.price)}>Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;
