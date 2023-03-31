import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Blog = ({handleTime,handleAddToCart}) => {
  
 

  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setData(data))  
  },[])


  return (
    <>
     {
      data.map(singlData=><Card 
        key={data.id}
        handleTime={handleTime} 
        singlData={singlData}
        handleAddToCart={handleAddToCart}
        ></Card>)
     }
    </>
  );
};

export default Blog;