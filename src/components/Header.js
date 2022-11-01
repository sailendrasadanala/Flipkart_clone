import React from 'react'
import './Header.css'
const Header = () => {
  return (
    
    <ul class="nav justify-content-end" style={{backgroundColor: "RGB(45, 50, 61)",justifyContent:"space-evenly",paddingRight:'100px'}}>
  
  <li class="nav-item">
    <a class="nav-link" href="#" style={{color:'white'}}>WISHLIST</a>
  </li>
  <img src='love.svg' className='headericons' alt='wishlist' style={{paddingRight:'7px'}}/>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{color:'white'}}>CART</a>
  </li> 
  <img src='cart.svg'className='headericons'alt='cart'/>

  <div class="dropdown">
    <img src='user.svg' alt='arrow'/>
  <button class="btn btn dropdown-toggle " style={{backgroundColor: "RGB(45, 50, 61)",color:"white"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sailendra
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Logout</button></li>
    
  </ul>
</div>
</ul>

  )
}

export default Header
