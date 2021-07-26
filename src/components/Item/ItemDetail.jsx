import React from 'react'
import './ItemDetail.css'
function ItemDetail({item ={}}) {
    return (
        <div className="itemDetail">
            <div class="card" style={{width: "5rem;"}}>
            <img src={item.imagen} class="card-img-top" alt={item.producto}></img>
            <div class="card-body">
            <h5 class="card-title">{item.nombre}</h5>
            <p class="card-text">{item.descripcion}</p>
            <p class="card-text">{item.precio}</p>
            <a href="/#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail
