import React from 'react'
import img from '../../images/sun2.jpg'
import './Post.css'
export default function Post({img}) {
  return (
    <div className='post'>
      
      
     <img  className='postImg' src={img} alt="" />
     <div className='postInfo'>
<div className='postCats'>
  <span className='postcat'> music </span>
  <span className='postcat'> life</span>
  <span className='postcat'> food</span>
</div>
<span className='postTitle'> Travelling Essay</span>
<hr/>
<span className='postDate'> 1hour ago</span><hr/>

     </div>
 <p className='postDesc'>To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes. Someone travels to gain knowledge and experience, someone travels for pleasure, someone travels for business purposes etc. It has much educative value. It is a part of education. Our education and book knowledge remain imperfect without travelling. We can learn many things from travelling. It teaches us to trade and commerce, language, sociology, customs, culture, history, geography and so on. Therefore, the educative value of travelling beggars description. Besides this, there are some special benefits of travelling. If a man stays in one place for a long time, he becomes monotonous. Travelling removes our monotony and gives pleasure. It also broadens our outlook and refreshes our mind. A good traveller can easily educate others. He can give us first-hand knowledge of men and matters of another country. I like travelling very much.
</p>
      
      
      
      
      
      
      
      
      
      
      
      
      
     </div>
  )
}
