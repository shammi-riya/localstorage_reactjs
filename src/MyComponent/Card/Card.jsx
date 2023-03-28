import React, { useEffect, useState } from 'react';
import { removeAll } from '../LocalStorage/LocalStorage';
import Products from '../Products/Products';
import './Card.css'

const Card = () => {
    const [data,setData] = useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    } ,[])



    return (
        <div className='cardContainer'>
            {
                data.map(product=>(<Products key={product.id} product={product}></Products>))
            }
            <button
             onClick={removeAll}
             style={{textAlign:"center"}}>Remove All</button>
        </div>
    );
};

export default Card;