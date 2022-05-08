import { Link } from "react-router-dom"
import "./Login.css"

export const Signin = ()=>{
    return(
        <div id="signin">

            <h1>SIGN IN</h1>

            <br />
            <input type="text" placeholder="Email"/>
            <br />
            <input type="text" placeholder="Password"/>
            <br />
            <Link to="/"><button id="signup-but">Sign In</button></Link>
            <br />
            <Link to="/signup"><p id="already">Create an Account. SignUp</p></Link>

        </div>
    )
}