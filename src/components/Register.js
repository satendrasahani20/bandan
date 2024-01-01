import React, { useState } from 'react'
import Header from './Header'
import "./../App.css"
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [dob, setDOB] = useState("")
    const [pass, setPass] = useState("")
    const [gender,setGender]=useState("")


    function saveData() {
        let exists = localStorage.getItem("data")
        let existsData = [];
        if (exists) {
            existsData = JSON.parse(exists)
        }

        if (existsData.length) {
            let checkData = existsData.find((item) =>
                item.email == email)
            if (checkData) {
                alert("Plz use Another email! user already exists")
                return false
            }
        }

        let tempObj = {
            name: name,
            email: email,
            age: age,
            address: address,
            dob: dob,
            password: pass,
            gender:gender
        }
        existsData.push(tempObj)
        let stringArr = JSON.stringify(existsData)
        localStorage.setItem("data", stringArr)
        alert("User created successfully")

    }
    return (
        <div className="Home">

            <Header />
            <div className="display-area m-4">
                <div className="container border h-500">
                    <h3 className="bg-white text-success mt-3 text-center">
                        Register Form</h3>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label>Name : </label>
                            <br />
                            <input type="text"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='col-sm-6'>
                            <label>Email  :</label>
                            <br />
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className='col-sm-6'>
                            <label>Age  :</label>
                            <br />
                            <input type="number"
                                onChange={(e) => setAge(e.target.value)} />

                        </div>
                        <div className='col-sm-6'>
                            <label>Address  :</label>
                            <br />
                            <input type="text"
                                onChange={(e) => setAddress(e.target.value)} />

                        </div>
                        <div className='col-sm-6'>
                            <label>DOB  :</label>
                            <br />
                            <input type="number"
                                onChange={(e) => setDOB(e.target.value)} />

                        </div>
                        <div className='col-sm-6'>
                            <label>Password  :</label>
                            <br />
                            <input type="number"
                                onChange={(e) => setPass(e.target.value)} />

                        </div>
                        <div className='col-sm-6'>
                             <label>Gender  :</label>
                            <br />
                            <input type="gender"
                                onChange={(e) => setGender(e.target.value)} />

                        </div>
                        <div className='col-sm-12 text-center'>
                            <button className="btn btn-success mt-3" onClick={saveData}>Click button</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Register