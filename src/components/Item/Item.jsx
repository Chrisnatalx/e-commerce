import React from 'react'
import './Item.css'

function Item({item}) {
    const{producto,img, descripcion } = item
    return (
    <div >
        <div class="card" style={{width: "18rem;"}}>
            <img src={img} class="card-img-top" alt={producto}></img>
            <div class="card-body">
            <h5 class="card-title">{producto}</h5>
            <p class="card-text">{descripcion}</p>
            <a href="/#" class="btn btn-primary">Mas Detalles</a>
            </div>
        </div>
    </div>
        
    )}
    
    export default Item