import React, { useState, useContext } from "react";
import CartContext from "../../CartContext";
import { Link } from "react-router-dom";
import { getFirestore } from "../../database/firebaseService";
import "firebase/firestore";
import firebase from "firebase";

function Cart() {
  const { cart, removeProduct, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState(initialState);
  const [orderFinalized, setOrderFinalized] = useState(false);
  const [orderID, setOrderID] = useState(null);
  //const buyer ={name:'christian',phone:'12345',email:'c@gmail.com'}
  const order = {
    buyer,
    item: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  const handlerChange = (evt) => {
    setBuyer({
      ...buyer,
      [evt.target.name]: evt.target.value,
    });
  };
  const validateEmailsAreEquals = () => {
    const { email, confirmEmail } = buyer;
    if (!email || !confirmEmail) return false;
    return email === confirmEmail;
  };
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    const db = getFirestore();
    db.collection("order")
      .add(order)
      .then((resp) => {
        setOrderID(resp.id);
        setOrderFinalized(true);
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  let total = 0;
  const emailsAreEquals = validateEmailsAreEquals();
  return !orderFinalized ? (
    <div>
      <table className="table">
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
      <br></br>
      <br></br>

      <form onSubmit={handlerSubmit} onChange={handlerChange}>
        <input
          type="texto"
          placeholder="Nombre"
          name="name"
          value={buyer.name}
          onChange={() => {}}
        />
        <input
          type="texto"
          placeholder="Telefono"
          name="phone"
          value={buyer.phone}
          onChange={() => {}}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={buyer.email}
          onChange={() => {}}
        />
        <input
          type="email"
          placeholder="Confirme email"
          name="confirmEmail"
          value={buyer.confirmEmail}
          onChange={() => {}}
        />
        <br></br>
        <br></br>
        {emailsAreEquals && (
          <button className="btn btn-primary">Finalizar compra</button>
        )}
      </form>
    </div>
  ) : (
    <div>Orden Finalizada con el ID : {orderID}</div>
  );
}

export default Cart;

const initialState = {
  name: "",
  phone: "",
  email: "",
  confirmEmail: "",
};
