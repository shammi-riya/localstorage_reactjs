import React from 'react';

const Quistion = () => {
    return (
        <div className='bg-slate-50 py-20 shadow-lg text-left'>
            <h2 className='font-bold text-3xl py-5 underline text-center' >Blogs</h2>
            <div className=' p-10 text-xl  rounded-sm' >
            <li className='font-bold text-2xl py-5'>What is defference between props and state</li>
             <h4>ans:Props are used to passsed from a perrent component to chiled component.they can not  modify by the chileed component. <br /><br />
                
             state cannot be accessed and modified outside the component and can only be used inside the component.State can be asynchronous</h4> 
        </div>
        <div className=' p-10 text-xl  rounded-sm'>
            <li className='font-bold text-2xl py-5'>Purpose of useEffect other than fetching data.?</li>
            <ol>Ans:1. Using useEffect for asynchronous tasks.</ol>
            <ol>2. Using multiple effects to separate concerns</ol>
            <ol>3. Scip unnessasry efect</ol>
           <div>
           useEffect(
            () => {
        // execute side effect
                }, <br />
          // optional dependency array
            [<br />
        // 0 or more entries
          ] 
      )
           </div>
       <p>the second argument is optional</p>
             
        </div >
        <div className=' p-10 text-xl  rounded-sm'>
            <li className='font-bold text-2xl py-5'>How dose react work?</li>
            <h4>React is an opensource, frontend JavaScript library for building user interface,behind the seen react create object and bubbols are compile our code and give syntacting suger to easily read and write</h4>

        </div>
        <div className=' p-10 text-xl rounded-sm'>
            <li className='font-bold text-2xl py-5'>How dose useState</li>
            <h4> usestate allow components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it innerside.</h4>

        </div>

        </div>

    );
};

export default Quistion;