import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg " id="Mainnav">
  <div class="container-fluid">
    <Link to="./" class="navbar-brand" id="nav" style={{fontSize:"20px", marginLeft:"15px"}}>Book Management System</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style={{marginLeft:"800px"}}>
        <Link to="./Categories" class="nav-link active" aria-current="page" id="nav" style={{marginRight:"30px"}}>Categories</Link>
        <Link to="./Suppliers" class="nav-link" id="nav" style={{marginRight:"30px"}}>Suppliers</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
