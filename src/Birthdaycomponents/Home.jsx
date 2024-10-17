import React, { useEffect, useState } from 'react'
import data from './dd'
import "./Home.css"
const Home = () => {
  let[dat,setdat]=useState(data)
  return (
    <>
    <h1>Todays Birthday List {dat.length} members</h1>
    <div id='main'>
      {dat.map(x=>{
        return(
            <div id='details'>
                <div id='image'>
                    <img src={x.img} alt="image" />
                </div>
                <div id='info'>
                    <h2>{x.name}</h2>
                    <p>{x.age}years</p>
                </div>
            </div>
        )
      })}
    </div>
    <button onClick={()=>setdat([])}>Clear All</button>
    </>
  )
}

export default Home
