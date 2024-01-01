import React from 'react'
import { Link } from 'react-router-dom'
import "./../App.css"
const Header = () => {
    return (
        <div className="custom-nav box mt-3">


            <div className="row">
                <div className="col-3">
                    <h5 className="ml-5 mt-3">SOFTWARE ACADEMY</h5>
                </div>

                <div className="col-9  ">
                <nav class="navbar navbar-expand-sm justify-content-end">
                    <ul className="navbar-nav">
                        <li classNmae="nav-item   ml-3 text-right ">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                         </li>
                        <li classNmae="nav-item   ml-3 text-right   ">
                            <Link className="nav-link text-dark" to="/login">Login</Link> 
                        </li>
                        <li classNmae="nav-item   ml-3 text-right   ">
                            <Link className="nav-link text-dark" to="/register">Register</Link>
                         </li>
                    </ul>
</nav>
                </div>
            </div>
        </div>
    )
}

export default Header