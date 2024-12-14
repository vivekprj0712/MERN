import React from 'react'
import College from './College'

const Uni = () => {

    const checkUni = ()=>{
        console.log("Function CheckUni Called....")
    }
  return (
    <div>
        <h1>Uni...</h1>
        {/* <button onClick={checkUni()}>Check Uni From Uni</button> // its called automatically */}
        {/* <button onClick={()=>{checkUni()}}>Check Uni From Uni</button> */}
        <College check = {checkUni}></College>
    </div>
  )
}

export default Uni
