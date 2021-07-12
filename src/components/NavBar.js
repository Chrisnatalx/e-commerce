import React from 'react'

function NavBar() {
    return (
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
            <p style={{padding:'15px'}}>Inicio</p>
            <p style={{padding:'15px'}}>Sobre nosotros</p>
            <p style={{padding:'15px'}}>Productos</p>
        </div>
    )
}

export default NavBar
