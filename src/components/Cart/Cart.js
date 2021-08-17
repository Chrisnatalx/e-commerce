import React, { useContext } from "react";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeProduct, clearCart } = useContext(CartContext);
  let total = 0;
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const { product, quantity } = item;
            const { nombre, precio, id } = product;
            const subtotal = quantity * precio;
            total += subtotal;
            return (
              <tr key={id}>
                <td>{nombre}</td>
                <td>${precio}</td>
                <td>{quantity}</td>
                <td>${subtotal}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => removeProduct(id)}
                  >
                    Quitar del carrito
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total compra : ${total}</p>
      <button className="btn btn-primary" onClick={() => clearCart()}>
        Vaciar carrito
      </button>
      <br></br>
      <br></br>

      <Link className="btn btn-primary" to="/">
        Inicio
      </Link>
    </div>
  );
}

export default Cart;
