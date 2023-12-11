import React from 'react'
import { Link } from 'react-router-dom'

export default function Closednav() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Medics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Medics</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <Link to={"/"} class="nav-link active" >Home</Link>
          </li>
          <li class="nav-item">
          <Link to={"/products"} class="nav-link active" >Products</Link>
          </li>
          <li class="nav-item">
          <Link to={"/cart"} class="nav-link active" >Cart</Link>
          </li>
          <li class="nav-item">
          <Link to={"/pastorders"} class="nav-link active" >Pastorders</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a> */}
            {/* <ul class="dropdown-menu">
              <li><Link to={"/cart"} class="dropdown-item" >Action</Link></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul> */}
          {/* </li> */}
        </ul>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
