import React, { useContext } from "react";
import CartContext from "../../CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return <div>carrito</div>;
}

export default Cart;
