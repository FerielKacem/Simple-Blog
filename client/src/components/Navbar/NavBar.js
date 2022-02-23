import React from 'react'
import './Navbar.css'
import image2 from '../../images/pexels-photo-1858175.jpeg'
export default function NavBar() {
  return (<>
  <div className='top'>
   <div className="topLeft">
   <i className="topIcon fa-brands fa-facebook"></i>
   <i className="topIcon  fa-brands fa-twitter"></i>
   <i className="topIcon  fa-brands fa-instagram"></i>
   <i className="topIcon fa-brands fa-whatsapp"></i>

   </div>
    <div className="topCenter">
      <ul className='topList'>
<li className="topListItem"> Home</li>
<li className="topListItem"> About </li>
<li className="topListItem"> Contact</li>
<li className="topListItem"> Write</li>
<li className="topListItem"> Logout</li>


      </ul>
        
    </div>
    <div className="topRight">
    <img  className='topImg' src={image2}  alt=""/>
    <i  className=" topSearchIcon fa-solid fa-magnifying-glass"></i>

    </div>      
    
    </div>
   </>

  )
}
