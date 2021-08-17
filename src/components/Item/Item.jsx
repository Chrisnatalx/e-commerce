import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { nombre, url, id } = item;
  return (
    <div>
      <div className="card">
        <img src={url} className="card-img-top" alt={nombre}></img>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <Link to={`/items/${id}`} className="btn btn-primary">
            Mas Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
