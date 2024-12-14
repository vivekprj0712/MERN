import React from 'react'

const DemoMap = () => {
    var users = ["raj" , "vivek" , "jay" , "khush"]

    var Students = [
        {
            id : 1,
            name : "vivek",
            age : 22
        },
        {
            id : 2,
            name : "jay",
            age : 21
        },
        {
            id : 3,
            name : "amit",
            age : 25
        }
    ]
  return (

    <div>
        {users.map(user=>{
            return (
            // <p style={{color:"green"}}>{user}</p>
            <p>
            <span style={{color : user.length > 3 ? "green" : "red"}}>{user}</span>
            </p>
        )
        })
    }

    <h1>Students</h1>
    {
        Students.map(stud=>{
            return (
                <div>
                    <h1>Name : {stud.name}</h1>
                    <h2>Age : {stud.age}</h2>
                </div>
            )            
        })    
    }
    </div>
  )
}

export default DemoMap
