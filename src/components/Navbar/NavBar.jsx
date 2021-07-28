import React from 'react'
import CartWidget from '../cartwidget/cartwidget'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom'



function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
       <Link class="navbar-brand" to="/">Inicio</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link class="nav-link active" to="/category/:hombres">Hombres</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/category/:niños">Niños</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/category/:mujeres">Mujeres</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true"><CartWidget></CartWidget></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default NavBar
