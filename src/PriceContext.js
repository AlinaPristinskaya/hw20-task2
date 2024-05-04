import React, { useState} from "react";

export const Price = React.createContext();

const PriceContext = (props) => {
  const [basket, setBasket] = useState(0);

  const updateBasket = (basket) => {
    setBasket((prevBasket) => prevBasket + basket);
  };
  const value = {
    basket,
    updateBasket,
  };
  return <Price.Provider value={value}>{props.children}</Price.Provider>;
};

export default PriceContext;
