import React from 'react'
import './itemListContainer.css'

const itemListContainer = ({greeting}) => {
    
    return(
        <div className="banner" >
            <h1 className="greeting">{greeting}</h1>
        </div>
    );
}
export default itemListContainer