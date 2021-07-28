import React, {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import jean1 from '../../imagenes/jean1.jpg'
import jean2 from '../../imagenes/jean2.jpg'
import gorra1 from '../../imagenes/gorra1.jpg'
import gorra2 from '../../imagenes/gorra2.jpg'
import buzomujer2 from '../../imagenes/buzomujer2.jpg'
import { useParams } from 'react-router'

const items = [
    {id:1,category:"hombre",img:jean1,producto:"Jean negro",descripcion:"Jean Levis negro chino" },
    {id:2,category:"hombre",img:jean2,producto:"Jean azul",descripcion:"Jean Levis azul chino" },
    {id:3,category:"niños",img:gorra1,producto:"Gorra azul",descripcion:"Gorra Levis azul 5 paneles" },
    {id:4,category:"niños",img:gorra2,producto:"Gorra negra",descripcion:"Gorra Levis negra 5 paneles"},
    {id:5,category:"mujer",img:buzomujer2,producto:"Buzo mujer",descripcion:"Buzo cangurito Levis negro mujer "}
]

 

const ItemListContainer = ({greeting}) => {
    const [list, setList] = useState([])
    const {catId} = useParams()
    
    useEffect(() => {  
        const task = new Promise((resuelto, rechazado)=>{
            let status=200
            if(status===200){
                setTimeout(()=>{
                    resuelto(items)
                },2000)
            }else{
                rechazado('rechazado')
            }
        })
        const getPromiseTask=()=>{
            return task
        }

        if( catId === undefined){
            getPromiseTask()
            .then((resp)=> setList(resp))   
        }else{
        getPromiseTask()
    .then((resp)=> setList(resp.filter(item => item.category === catId))) }         
    }, [catId])
    
    return(
        <div className="banner" >
            <h1 className="greeting">{greeting}</h1>
            <ItemList list={list}/>
        </div>
    );
}
export default ItemListContainer