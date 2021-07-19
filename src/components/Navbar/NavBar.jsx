import React from 'react'
import CartWidget from '../cartwidget/cartwidget'
import './Navbar.css'
function NavBar() {
    return (
        <div>
            <ul className="menu">
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Productos</a></li>
                <li><a href="/#">Sobre Nosotros</a></li>
                <li><a href="/#">Contacto</a></li>
                <li><a href="/#"><CartWidget/></a></li>

            </ul>
        </div>
    )
}

export default NavBar
