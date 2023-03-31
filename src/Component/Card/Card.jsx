import React, { useState } from 'react';
  
  
const Card = ({handleAddToCart,handleTime,singlData}) => {
    const {author,title,cover_image,publish_date,read_time}=singlData
    return (
         <div className="card w-[full] bg-base-100 shadow-xl ">
            <figure><img className=' w-full' src={cover_image} alt="Shoes" /></figure>
            <div className="card-body ">
            <h1 className="card-title font-bold lg:text-2xl text-xl text-left">{title}</h1>
                <div className='flex justify-between py-6 font-bold'>
                  <div className='flex gap-4'>
                  <img className='h-10 w-10 rounded-full' src={author.image} alt="" />
                   <div className=''>
                   <p className='text-left'>{author.name}</p>        
                    <p>{publish_date}</p>
                   </div>
                  </div>
                  <div className='flex gap-3 justify-between align-middle'>
                   <p>{read_time}minits</p>
                   
                  <span onClick={()=>handleAddToCart(singlData)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                  </span>

                </div>
             </div>
              
            <div className='text-left py-4'>
             <button onClick={()=>handleTime(read_time)} className="btn btn-link">mark as read</button>
          </div>
       </div>          
    </div>       
   );
};

export default Card;