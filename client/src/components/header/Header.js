import React from 'react'
import './Header.css'
import image1 from '../../images/R.png'
export default function Header() {
  return (
    <div className="header">
    <div className='headerTitles'>
  <span className='headerTitleSm'>React and Node </span>
  <span className='headerTitlelg'> Blog</span>
  </div> 
       <img className='headerimg' src={image1} alt="" /> 
        
        
         </div>
  )
}
