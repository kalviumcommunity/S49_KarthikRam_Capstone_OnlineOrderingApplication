import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function HomePage() {

  const [apiData, setApidata] = useState([])

  useEffect(()=>{
    const fetchData = async()  =>{
      try{
         axios.get('http://localhost:3000/api/homepage').then((res)=>{
            console.log(res.data)
            setApidata(res.data)
        })
        
      }catch(err){
        console.error(err)
      }
    } 
    fetchData()
  }, [])

  

  return (
    <div>{
      apiData && apiData.map((item)=>{
           return(<div key={item._id}>
            <h1>{item.name}</h1>
            {
              console.log(item.img)
            }
            <img src={item.img} alt = 'hey' />
          </div>)}
      )}</div>
    // <div>Hii</div>
  )
}

export default HomePage