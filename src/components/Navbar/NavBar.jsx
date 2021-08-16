import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartwidget/cartwidget'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
       <Link className="navbar-brand" to="/">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link active" to="/category/hombres">Hombres</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/category/niños">Niños</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/category/mujeres">Mujeres</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/cart"><CartWidget></CartWidget></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default NavBar
