import React from 'react'
import './Rightside.css'
const Rightside = () => {
  return (
    <div className='Rightcontainer'>
      <p>Product Code <b>ODE349879</b></p>
      <h3>Honor 8 Pro (Midnight Black,128GB)</h3>
      <h3>(6GB RAM)</h3>
      <div>
      <img src='star.svg'/>
      <img src='star.svg'/>
      <img src='star.svg'/>
      <img src='star.svg'/>
      <img src='nostar.svg'/>
      <p className='ratings'>(9,303)</p>
      </div>
      <h3 className='ratings'>$99.99</h3>
      <s className='ratings'>$149.99</s>
      <h5 style={{display:'inline'}}>  30% off</h5>
      <h6 >In stock</h6>
      <div className='colorbox'>
        <p>Color Sapphire Blue</p>
        <button className='colorselection' style={{backgroundColor:'blue',borderColor:'transparent'}}></button>
        <button className='colorselection' style={{backgroundColor:'black',borderColor:'red'}}></button>
        <button className='colorselection' style={{backgroundColor:'grey',borderColor:'transparent'}}></button>
      </div>
      <p className='foot'>Storage <b>32GB</b></p>
      <p className='foot'>RAM <b>4GB</b></p> <br/>

      <div className='firstbtn'>64 GB</div>

      <div className='secondbtn'>128 GB</div>
      <div className='secondbtn'>2 GB</div>
      <div className='firstbtn'>4 GB</div> <br/> <br/>

      <p>+ PRODUCT DETAILS</p>
    </div>
  )
}

export default Rightside
