import { Link } from "react-router-dom"
import "./Login.css"

export const Signup = ()=>{
    return(
        <div id="signup">
            <h1>CREATE AN ACCOUNT</h1>
            <br />
            <input type="text" placeholder="First Name"/>
            <br />
            <input type="text" placeholder="Last Name"/>
            <br />
            <input type="text" placeholder="Email"/>
            <br />
            <input type="text" placeholder="Password"/>
            <br />
            <input type="text" placeholder="Confirm Password"/>
            <br />
            <Link to="/signin"><button id="signup-but">Create Account</button></Link>
            <br />
            <Link to="/signin"><p id="already">Already a member? SignIn</p></Link>

        </div>
    )
}