import React, { useEffect, useState } from 'react'
import Header from './Header'

const Dashboard = () => {
  const [answer, setAnswer] = useState("")
  const  female= ["rani", "riya", "priya", "radha", "soni", "rina", "anamika", "shanaj", "ankita", "annu"]
  const  male = ["mohan", "sohan", "rohit", "mohit", "ajay", "ankit", "golu", "abhi", "ritik", "johan"]
  const [user, setUser] = useState({})
  useEffect(() => {
    let localData = localStorage.getItem("user")
    setUser(JSON.parse(localData))
  }, [])

  function clickName() {
   
    let tempArr = [];
    if (user.gender == "Female") {
      tempArr = male
   }else{
      tempArr=female
   }
    let randomName=parseInt(Math.random()*10)

    setAnswer(tempArr[randomName])

  }

  return (
    <div className="Home">
      <Header />
      <div className="display-area">
        <h1 className="text-center text-success"> Welcome To {user.name}</h1>
        <div className="container bg-dark text-center pb-4 ">
          <p>Check Your {user.gender == "Female" ? "Hushband Name" : "Wife Name"} </p>
          <button className='btn btn-success text-dark mr-3' onClick={clickName}>A</button>
          <button className='btn btn-success text-dark mr-3' onClick={clickName}>B</button>
          <button className='btn btn-success text-dark mr-3' onClick={clickName}>C</button>
          <button className='btn btn-success text-dark mr-3' onClick={clickName}>D</button>
         {answer && <h1 className='text-center'>your answer is : {answer}</h1>}
        </div>
      </div>



    </div>
  )
}

export default Dashboard