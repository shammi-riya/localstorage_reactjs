import React from 'react';
import { addToDb,  removeId } from '../LocalStorage/LocalStorage';
import './Products.css'
const Products = (props) => {
    
    const {name,price,balance,id} = props.product;

    const addToCart =(id)=>{
       addToDb(id)
    }
    const removeCart =(id)=>{
      removeId(id)
    }
    return (
     
         <div className='card'>
            <h3>name:{name}</h3>
            <h4>balance:{balance}</h4>
            <h4>price:{price}</h4>
             <h5>id:{id}</h5>
             <button onClick={()=>addToCart(id)}>Add To cart</button>
             <button onClick={()=>removeCart(id)}>remove</button>
        </div>
        
     
    );
};

export default Products;