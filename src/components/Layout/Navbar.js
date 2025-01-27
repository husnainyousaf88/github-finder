import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';





const Navbar1 =  ({icon, title}) =>{

        return (



<Nav  class="navbar navbar-expand-lg navbar-danger bg-primary fixed-top">
<div class="container">
  <a class="navbar-brand" href="#">Github Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>

    </ul>
  </div>
</div>
</Nav>

        );
};

Navbar.defaultProps = {
    title: 'Git Hub Finder',
    icon: 'fab fa-github'
  }

export default Navbar1;
