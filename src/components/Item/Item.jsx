import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({item}) {
    const{producto,img, descripcion,id } = item
    return (
    <div >
        <div class="card" style={{width: "18rem;"}}>
            <img src={img} class="card-img-top" alt={producto}></img>
            <div class="card-body">
            <h5 class="card-title">{producto}</h5>
            <p class="card-text">{descripcion}</p>
            <Link to={`/items/${id}`} class="btn btn-primary">Mas Detalles</Link>
            </div>
        </div>
    </div>
        
    )}
    
    export default Item