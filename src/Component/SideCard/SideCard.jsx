import React, { useEffect, useState } from 'react';

const SideCard = ({times,bookmarks}) => {      
  const [time ,setTime] = useState(times)
  useEffect(()=>{
      const getTime = localStorage.getItem("WatchTime")
      if(getTime){
        setTime(getTime);
      }else{
        setTime("0");
      }         
  },[times])


    return (      
        <div className='bg-base-600  font-bold'>
         <h1 className='py-5 text-2xl'>Spent Time On Read:{parseFloat(time)}minit</h1>
         <h4 className='text-2xl'>BookMark Blogs <span>{bookmarks.length}</span></h4>
        <div className='py-4'>
        {
             bookmarks.map(item=><h4 className='shadow py-6 px-7 pt-4 bg-slate-50 w-[75%] mx-auto rounded font-bold'>{item.title}</h4>)
        }
        </div>    
        </div>
    );
};

export default SideCard;