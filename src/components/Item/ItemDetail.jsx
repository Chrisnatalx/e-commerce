import React , {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount.jsx/ItemCount';

function ItemDetail({item ={}}) {
    const [cantidad, setCantidad] = useState(0)
    const handleCount =(cant)=>{
        setCantidad(cant)
    }

    const finalizarCompra = ()=>{
        alert(`finalizar Compra de ${cantidad} items` )
    }
    return (
        <div className="itemDetail">
            <div className="card">
                <img src={item.img} className="card-img-top" alt={item.producto}></img>
                <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text">{item.precio}</p>
                {
                    cantidad === 0 ? 
                    <ItemCount stock={5} initial={1} onAdd={handleCount}/> : 
                    <button id="Terminar" className="btn btn-primary" onClick={finalizarCompra}>Terminar compra</button>

                }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
