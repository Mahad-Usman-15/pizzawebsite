import React, { useEffect,useState } from 'react'
import axios from "axios"
const Categorybar = () => {
  const [categories,setiscategories]=useState([])

  useEffect(()=>{
const fetchcategories=async ()=>{
  try{
  const response = await axios.get("https://pizzabackend-omega.vercel.app/api/categories",{
 method:"GET",
 headers:{
  "Content-Type":"application/json",
 }
  })
  const data = response.data
  setiscategories(data)
  }catch(error){
    console.log("Error fetching categories=>",error)
  }

}
fetchcategories()
  },[])

    const handlescroll=(id)=>{
document.getElementById(id).scrollIntoView({behavior:"smooth"})
    }
  return (
    <div className=' sticky flex items-center justify-center top-0 right-0 bg-red-600 h-16 md:h-20 px-3 py-3 z-50'>
<div className='flex flex-row items-center  overflow-x-auto  justify-center  gap-2'>
{
categories.map((category,index)=>(
    <span key={index} onClick={()=>handlescroll(category.sectionid)} className='cursor-pointer text-xs  md:text-2xl text-white font-bold hover:bg-green-800 transition-all duration-500 px-2 py-2 rounded-2xl ' >{category.category}</span>
))
}
</div>
    </div>
  )
}

export default Categorybar