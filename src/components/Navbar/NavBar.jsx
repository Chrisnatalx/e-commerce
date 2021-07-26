import React from 'react'
import CartWidget from '../cartwidget/cartwidget'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div>
            <ul className="menu">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/#">Acerca de</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/#">Contacto</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/#">Hombres</a></li>
            <li><a class="dropdown-item" href="/#">Mujeres</a></li>
            <li><a class="dropdown-item" href="/#">Niños</a></li>
          </ul>
        </li>
        <a class="navbar-brand" href="/#"><CartWidget/></a>
      </ul>
    </div>
  </div>
</nav>

            </ul>
        </div>
    )
}

export default NavBar
