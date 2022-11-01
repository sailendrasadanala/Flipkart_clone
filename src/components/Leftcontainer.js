import React from 'react'
import './Leftcontainer.css'
const Leftcontainer = () => {
  return (
    <div className='Leftcont'>
      <p className='leftp'>HOME / MOBILES</p>
      <div className='serial_img'>
        <ul>
            <li className='list' style={{transform:"translateY(0px)"}} >
        <img src='./image1.png'/>
            </li>
            <li className='list'>
                <img className='under' src='./image1.png' />
                <img className='over' src='./play.svg'  />        
            </li><br/> <br/><br/>
            <li className='list'>
        <img src='./image3.png'/>
            </li>
            <li className='list'>
        <img src='./image4..png'/>
            </li>
            <li className='list'>
        <img src='./image5.png' style={{marginLeft:'-10px',height:'45px',width:'45px'}}/>
            </li>
            <li className='list'>
        <img src='./image6.png'/>
            </li>
        </ul>
      </div>
      <img src='mainphone.png' className='mainphone'/>
      <div className='love'>
      <img src='love2.svg'/>
      </div>
      <div className='buy'>
          <button >Add to cart</button>
          <button className='buynow'>Buy now</button>
    </div>
      
      
      
    </div>
  )
}

export default Leftcontainer
