import React, {useState} from 'react'

function ItemCount({initial,stock,onAdd}) {
    const [cantidad,setCantidad] = useState(initial)
    const handleAdd=()=> {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    const handleRemove=()=>{
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div className="card text-center w-25">
            <div className="card-header">
                <h4>Item Count</h4>
            </div>
            <div className="body">
                <button className="btn btn-primary" onClick={()=>handleRemove()}>-</button>
                <label className="alert alert-white">{cantidad}</label>
                <button className="btn btn-primary" onClick={()=>handleAdd()}>+</button>
                <br />
                <button className="btn btn-primary" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
