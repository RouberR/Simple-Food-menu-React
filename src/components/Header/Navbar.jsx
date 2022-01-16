import React from 'react'
import "./navbar.scss"
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="leftSide">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="rightSide">
                
                    <Link to="/">Home</Link>
                    <Link to="/Menu">Menu</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                 
                </div>
            </div>
        </div>
    )
}
