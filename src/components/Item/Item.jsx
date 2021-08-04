import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({item}) {
    const{producto,img, descripcion,id } = item
    return (
    <div >
        <div className="card">
            <img src={img} className="card-img-top" alt={producto}></img>
            <div className="card-body">
            <h5 className="card-title">{producto}</h5>
            <p className="card-text">{descripcion}</p>
            <Link to={`/items/${id}`} className="btn btn-primary">Mas Detalles</Link>
            </div>
        </div>
    </div>
        
    )}
    
    export default Item