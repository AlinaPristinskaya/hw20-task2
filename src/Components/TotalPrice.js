import React from "react";
import { useContext } from "react";
import { Price } from "../PriceContext"; // Assuming you use context to pass state

function TotalPrice() {
  const data = useContext(Price);

  console.log(data);
  return (
    data.basket > 0 && (
      <h2 style={{ fontSize: "20px" }}>Total Price: ${data.basket}</h2>
    )
  );
}

export default TotalPrice;
