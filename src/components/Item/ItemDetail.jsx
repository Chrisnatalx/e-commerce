import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount.jsx/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ item = {} }) {
  const { addProduct } = useContext(CartContext);
  const [addedToCart, setaddedToCart] = useState(false);
  const handleCount = (cant) => {
    addProduct(item, cant);
    setaddedToCart(!addedToCart);
  };

  const { url, nombre, precio } = item;
  return (
    <div className="itemDetail">
      <div className="card">
        <img src={url} className="card-img-top" alt={nombre}></img>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{precio}</p>
          {addedToCart === true ? (
            <Link className="btn btn-primary" to="/cart">
              Terminar compra
            </Link>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
