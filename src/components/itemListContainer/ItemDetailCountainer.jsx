import React, {useState,useEffect} from 'react'
import ItemDetail from '../Item/ItemDetail'
import buzomujer from '../../imagenes/buzomujer.jpg'

const detalleItem= {
    nombre:'Buzo Levis mujer',
    descripcion: 'Buzo negro levis con mangas blancas y puños celestes',
    imagen:buzomujer,
    precio: '$6000'
    }

    const task = new Promise((res)=>{
        res(detalleItem)
    },2000)

    const getMocks=()=>{
        return task
    }

function ItemDetailCountainer() {
    const  [Item, setItem] = useState([])

    useEffect(() => {
        getMocks()
        .then(resp => setItem(resp))
        
    }, [])
    console.log(Item)
    return (
        <div>
            <ItemDetail item ={detalleItem}/>
            
        </div>
    )
}

export default ItemDetailCountainer
