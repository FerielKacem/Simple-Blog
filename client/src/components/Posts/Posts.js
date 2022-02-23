import React from 'react'
import './Posts.css'
import Post from '../post/Post'
import img from '../../images/sun2.jpg'
import img2 from '../../images/sun3.jpg'
import img3 from '../../images/sun4.jpg'
import img4 from '../../images/sun5.jpg'
import img5 from '../../images/sun1.jpg'
export default function Posts() {
  return (
  
<> 
<div className='posts'>
<Post img= {img}/>
<Post img= {img2}  />
<Post img= {img3}  />
<Post img= {img4}  />
<Post img= {img5}  />
<Post img= {img2}  />

</div>
</>
    
  )
}
