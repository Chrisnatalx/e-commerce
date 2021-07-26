import React, {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'
import jean1 from '../../imagenes/jean1.jpg'
import jean2 from '../../imagenes/jean2.jpg'
import gorra1 from '../../imagenes/gorra1.jpg'
import gorra2 from '../../imagenes/gorra2.jpg'
import buzomujer2 from '../../imagenes/buzomujer2.jpg'

const items = [
    {id:1,img:jean1,producto:"Jean negro",descripcion:"Jean Levis negro chino" },
    {id:2,img:jean2,producto:"Jean azul",descripcion:"Jean Levis azul chino" },
    {id:3,img:gorra1,producto:"Gorra azul",descripcion:"Gorra Levis azul 5 paneles" },
    {id:4,img:gorra2,producto:"Gorra negra",descripcion:"Gorra Levis negra 5 paneles"},
    {id:5,img:buzomujer2,producto:"Buzo mujer",descripcion:"Buzo cangurito Levis negro mujer "}
]

const ItemListContainer = ({greeting}) => {
    const [list, setList] = useState([])
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

        getPromiseTask()
    .then((resp)=> setList(resp))    
    .catch(err=> { console.log('un error')})    
    
        
    }, [])
    
    return(
        <div className="banner" >
            <h1 className="greeting">{greeting}</h1>
            <ItemList list={list}/>
        </div>
    );
}
export default ItemListContainer