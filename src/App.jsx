import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Blog from './Component/Blog/Blog'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SideCard from './Component/SideCard/SideCard'
import Quistion from './Component/Quistion/Quistion'
  



function App() {
 
  // set spent time
  const [times,setTimes] = useState("")
  const handleTime = (time) =>{
    const previusWatch =JSON.parse(localStorage.getItem("WatchTime")) 
   if(previusWatch){
    const sum = previusWatch + parseFloat(time)
      localStorage.setItem("WatchTime",sum)
      setTimes(sum)     
   }
   else{
    localStorage.setItem("WatchTime",time)
    setTimes(time)
    
   }
  }
    
// bookmark
  const [bookmarks,setBookmarks] =useState([])
  const handleAddToCart = (bookmark) =>{
    
   const ide = bookmark.id;
    const addToLocalStorage = (id)=>{
      const quiantity = localStorage.getItem(id);
      if(quiantity){
        toast("already exits!")
      }else{
        const newBookMark = [...bookmarks ,bookmark]
        setBookmarks(newBookMark)
        localStorage.setItem(id,bookmark.title)
      }     
    }
    addToLocalStorage(ide)
  }

  return (
    <div className="App px-0">
      <Header></Header>
      <div className='flex lg:flex-row flex-col gap-6 py-8'>
      <div className='bg-base-600 grid lg:w-[50%] w-full gap-6'>
    
    <Blog handleAddToCart={handleAddToCart}
        times={times} 
       handleTime={handleTime}    
    ></Blog>
   
    </div> 
     <div className=' bg-blue-100 h-1/5 sticky lg:w-[45%] w-full  top-0 '>
    <SideCard 
     
     bookmarks={bookmarks}  
     times={times}>
     </SideCard>
     </div>
      </div>
      <Quistion></Quistion>
     <ToastContainer></ToastContainer>
      </div>
    
  )
}

export default App
