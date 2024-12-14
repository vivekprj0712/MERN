import React from 'react'

const College = (props) => {
  return (
    <div>
      <h1>College</h1>
      <button onClick={() => {props.check()}}>Check Uni From College</button>
    </div>
  )
}

export default College
