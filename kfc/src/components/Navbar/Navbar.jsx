import { Link } from "react-router-dom"
import "./Navbar.css"
import account from "../images/account.png"
import bag from "../images/bag.png"

export const Navbar = ()=>{

    return(
        <div id="navbar">

            <img id="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Kentucky-Fried-Chicken-Logo-1952-1978.png" alt="" />
            <img id="redline" src="https://kfccatering.com/wp-content/uploads/2020/08/KFC_RedStripes_web.png" alt="" />
            <Link to="/"><h4 id="menu">Menu</h4></Link> 
            <Link to="/"><h4 id="career">Careers</h4></Link>
            <Link to="/"><h4 id="about">About</h4></Link> 
            <Link to="/" ><h4 id="find">Find A KFC</h4></Link>
            <Link to="/order"><button id="order">Start Order</button></Link>
            <img id="account" src={account} alt="" />
            <img id="bag" src={bag} alt="" />

        </div>
    )
}