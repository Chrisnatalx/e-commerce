import React, { useContext } from "react";
import CartContext from "../../CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {/* carrito
      {cart.map((item) => (
        <p key={item.item.id}>{item.item.precio}</p> //tengo que consumir mi context para poder traer los productos en carrito
      ))} */}
    </div>
  );
}

export default Cart;
