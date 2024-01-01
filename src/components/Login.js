import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate()

    function loginNow() {
        let localData=localStorage.getItem("data")
         
        let nawData=JSON.parse(localData)
        let checkEmail=nawData.find((item)=>item.email==email)
        if(checkEmail){
            let checkPass=checkEmail.password==password
            if(checkPass){
                localStorage.setItem("user",JSON.stringify(checkEmail))
                navigate("/dashboard")

            }else{
                alert("your password is not matchd")
            }

        }else{
            alert("your email is not matchd")
        }
      
    }
        return (
            <div className="Home">

                <Header />
                <div className="display-area m-4">
                    <div className="container border h-500">
                        <h3 className="bg-white text-success mt-3 text-center">
                            Login</h3>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <label>Email  :</label>
                                <br />
                                <input type="email"
                                    onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className='col-sm-6'>
                                <label>Password  :</label>
                                <br />
                                <input type="number"
                                    onChange={(e) => setPass(e.target.value)} />

                            </div>
                            <div className='col-sm-12 text-center'>
                                <button className="btn btn-success mt-3" onClick={loginNow}>Click button</button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        )
    }

    export default Login