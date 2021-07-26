import React from 'react'
import Item from '../Item/Item.jsx'
import './ItemList.css'

function ItemList({list}) {
    return (
        <div className="carta">
            {list.map(item=> <Item item={item} key={item.id}/>)}
        </div>
    )
}

export default ItemList
