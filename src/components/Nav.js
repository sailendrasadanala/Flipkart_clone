import React from 'react'
import './Nav.css'
import { Search } from 'react-bootstrap-icons';
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img class="navbar-brand" src='./icon.svg' />
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >PHONE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >TELEVISION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >REFRIGERATOR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >LAPTOP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >WASHING MACHINE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  >Downloads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href='_top'  ></a>
        </li>
        
        
      </ul>
      
      <form class="d-flex" role="search">
        <Search className='Search_icon' style={{width:'30px',height:'25px',padding:'0.5px',backgroundColor:'transparent',marginRight:'-30px'}} />
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{background:'transparent',paddingLeft:'30px', border:'none',borderBottom:'2px solid grey'}}/>
        <img src='close.svg' className='closeIcon' style={{color:'transparent'}}/>     
      </form>
      
    </div>
  </div>
</nav>
  )
}

export default Nav
