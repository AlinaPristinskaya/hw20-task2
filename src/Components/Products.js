import React, { useState, useContext } from "react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { Price } from "../PriceContext";
import TotalPrice from "./TotalPrice";
import image from "./ProductImage";

const products = [
  {
    id: 1,
    src: image[0],
    title: "Carpit",
    description:
      "A set of mats in the bathroom and toilet are made of soft, fluffy and pleasant to the touch microfiber. Visually similar to towels. The pile is not high, about 5 mm. Dimensions - rectangular 80*50 cm and rectangular with a cut-out for the toilet 40*50. The base is made of silicone point, does not slide on the floor. Carpets absorb a lot of water and dry quickly. Automatic washing is allowed.",
    price: 46,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    src: image[1],
    title: "Shtora",
    description:
      "Water-repellent fabric curtain for the bathroom. Size 180*200 cm, manufacturer Tropichome, Turkey. Designer colors of Tropichome will create a wow effect in your bathroom. Excellent quality, full color printing. Soft and pleasant to the touch, quick drying. Very easy to care for - it can be washed in a washing machine and ironed. On the upper edge, a double bend with holes for rings. Rings are not included! They can be purchased additionally.",
    price: 74,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 3,
    src: image[2],
    title: "BathMat",
    description:
      "This rug is placed either on the floor or directly in the bath or shower. Made of silicone - a material that does not absorb water. Thanks to the suction cups on the back side of the mat, they are securely fixed and will not allow them to slip. Caring for such rugs is very easy. It is enough to dry it after bathing and periodically wash it with a rag and disinfectants.",
    price: 86,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 4,
    src: image[3],
    title: "Carpit",
    description:
      "A set of mats in the bathroom and toilet are made of soft, fluffy and pleasant to the touch microfiber. Visually similar to towels. The pile is not high, about 5 mm. Dimensions - rectangular 80*50 cm and rectangular with a cut-out for the toilet 40*50. The base is made of silicone point, does not slide on the floor. Carpets absorb a lot of water and dry quickly. Automatic washing is allowed.",
    price: 46,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 5,
    src: image[4],
    title: "Shtora",
    description:
      "Water-repellent fabric curtain for the bathroom. Size 180*200 cm, manufacturer Tropichome, Turkey. Designer colors of Tropichome will create a wow effect in your bathroom. Excellent quality, full color printing. Soft and pleasant to the touch, quick drying. Very easy to care for - it can be washed in a washing machine and ironed. On the upper edge, a double bend with holes for rings. Rings are not included! They can be purchased additionally.",
    price: 74,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 6,
    src: image[5],
    title: "BathMat",
    description:
      "This rug is placed either on the floor or directly in the bath or shower. Made of silicone - a material that does not absorb water. Thanks to the suction cups on the back side of the mat, they are securely fixed and will not allow them to slip. Caring for such rugs is very easy. It is enough to dry it after bathing and periodically wash it with a rag and disinfectants.",
    price: 86,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 7,
    src: image[1],
    title: "Carpit",
    description:
      "A set of mats in the bathroom and toilet are made of soft, fluffy and pleasant to the touch microfiber. Visually similar to towels. The pile is not high, about 5 mm. Dimensions - rectangular 80*50 cm and rectangular with a cut-out for the toilet 40*50. The base is made of silicone point, does not slide on the floor. Carpets absorb a lot of water and dry quickly. Automatic washing is allowed.",
    price: 46,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 8,
    src: image[6],
    title: "Shtora",
    description:
      "Water-repellent fabric curtain for the bathroom. Size 180*200 cm, manufacturer Tropichome, Turkey. Designer colors of Tropichome will create a wow effect in your bathroom. Excellent quality, full color printing. Soft and pleasant to the touch, quick drying. Very easy to care for - it can be washed in a washing machine and ironed. On the upper edge, a double bend with holes for rings. Rings are not included! They can be purchased additionally.",
    price: 74,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 9,
    src: image[7],
    title: "BathMat",
    description:
      "This rug is placed either on the floor or directly in the bath or shower. Made of silicone - a material that does not absorb water. Thanks to the suction cups on the back side of the mat, they are securely fixed and will not allow them to slip. Caring for such rugs is very easy. It is enough to dry it after bathing and periodically wash it with a rag and disinfectants.",
    price: 86,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 10,
    src: image[8],
    title: "Carpit",
    description:
      "A set of mats in the bathroom and toilet are made of soft, fluffy and pleasant to the touch microfiber. Visually similar to towels. The pile is not high, about 5 mm. Dimensions - rectangular 80*50 cm and rectangular with a cut-out for the toilet 40*50. The base is made of silicone point, does not slide on the floor. Carpets absorb a lot of water and dry quickly. Automatic washing is allowed.",
    price: 46,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 11,
    src: image[0],
    title: "Shtora",
    description:
      "Water-repellent fabric curtain for the bathroom. Size 180*200 cm, manufacturer Tropichome, Turkey. Designer colors of Tropichome will create a wow effect in your bathroom. Excellent quality, full color printing. Soft and pleasant to the touch, quick drying. Very easy to care for - it can be washed in a washing machine and ironed. On the upper edge, a double bend with holes for rings. Rings are not included! They can be purchased additionally.",
    price: 74,
    colors: ["Red", "Blue", "Green"],
  },
];

function Products() {
  const [selectedColors, setSelectedColors] = useState({});
  const data = useContext(Price);

  const handleColorSelect = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };
  const getColorButtonLabel = (productId) => {
    return selectedColors[productId] || "Select Color";
  };

  //function determines the button color for the "option" 
  //property based on the color selected by the user
  const colorVariantFunction = (productId) => {
    switch (selectedColors[productId]) {
      case "Red":
        return "danger";
      case "Green":
        return "success";
      case "Blue":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <Container>
      <div style={{ position: "fixed", top: "10px", right: "10px" }}>
        <TotalPrice price={data.basket} />
      </div>
      <Row xs={1} md={2}>
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.src} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
                Price: ${product.price}
              </Card.Text>
              <DropdownButton
                style={{ margin: "10px" }}
                id={`dropdown-button-drop-${product.id}`}
                key={product.id}
                title={getColorButtonLabel(product.id)}
                onSelect={(e) => handleColorSelect(product.id, e)}
                variant={colorVariantFunction(product.id)}
              >
                {product.colors.map((color) => (
                  <Dropdown.Item key={color} eventKey={color}>
                    {color}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <Button
                variant="secondary"
                style={{ marginLeft: "10px" }}
                onClick={() => data.updateBasket(product.price)}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
