import { Link } from "react-router-dom"
import "./Black.css"

export const Black = ()=>{

    return(
        <div id="black">
            {/* <img id="loc" src="https://ak.picdn.net/shutterstock/videos/1028235965/thumb/1.jpg?ip=x480" alt="" /> */}
            <Link to="/"><h4 id="start">Start an Order for Pickup or Delivery</h4></Link> 
        </div>
    )
}