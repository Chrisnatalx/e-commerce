import React, {useState,useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import ItemDetail from '../Item/ItemDetail'
import {productsMocks} from '../../mocks/productsMocks'

    const task = new Promise((res)=>{
        res(productsMocks)
    },2000)

    const getMocks=()=>{
        return task
    }

function ItemDetailCountainer() {
    const  [item, setItem] = useState([])
    const { itemId } = useParams();
    useEffect(() => {
        getMocks()
        .then(resp =>{
            setItem(resp.find((item) => item.id === parseInt(itemId)))
        })
        
    }, [itemId])
    console.log(item)
    console.log(itemId)
    return (
        <div>
            <ItemDetail item={item}/>
            
        </div>
    )
}

export default ItemDetailCountainer
