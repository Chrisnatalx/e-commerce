import React , {useContext} from 'react'
import  CartContext from '../../CartContext'
import './ItemDetail.css'
import ItemCount from '../ItemCount.jsx/ItemCount';
import { Link } from 'react-router-dom'

function ItemDetail({item ={}}) {
    const {cart, addProduct, isInCart} = useContext(CartContext)
    const handleCount =(cant)=>{
        addProduct(item.id,cant)
    }


    return (
        <div className="itemDetail">
            <div className="card">
                <img src={item.img} className="card-img-top" alt={item.producto}></img>
                <div className="card-body">
                <h5 className="card-title">{item.descripcion}</h5>
                <p className="card-text">{item.precio}</p>
                {
                    isInCart(item.id)? 
                    <Link className="btn btn-primary" to="/cart">Terminar compra</Link> :
                    <ItemCount stock={5} initial={1} onAdd={handleCount}/> 
                    

                }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
