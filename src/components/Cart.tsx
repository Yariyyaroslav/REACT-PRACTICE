import React from "react";

type CartProps = {
  empty: boolean;
};
const Cart: React.FC<CartProps> = ({ empty }) => {
  if (!empty) {
    return <button>Chech Cart</button>;
  } else {
    return <p>Cart is empty</p>;
  }
};
export default Cart;
