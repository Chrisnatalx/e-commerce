import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount.jsx/ItemCount';

const handleCount =(cant)=>{
    alert( 'agregaste: '+ cant);
  }

function ItemDetail({item ={}}) {
    return (
        <div className="itemDetail">
            <div class="card" style={{width: "5rem;"}}>
                <img src={item.imagen} class="card-img-top" alt={item.producto}></img>
                <div class="card-body">
                <h5 class="card-title">{item.nombre}</h5>
                <p class="card-text">{item.descripcion}</p>
                <p class="card-text">{item.precio}</p>
                <ItemCount stock={5} initial={1} onAdd={handleCount} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
