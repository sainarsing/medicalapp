import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginnav() {
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
          <Link to={"/Login"} class="nav-link active" >Login</Link>
          </li>
          <li class="nav-item">
            <Link to={"/Register"} class="nav-link active" >Register</Link>
          </li>
          <li class="nav-item">
          <Link to={"/About"} class="nav-link active" >About</Link>
          </li>
          
          
        </ul>
      
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}