import { Route, Routes } from "react-router"
import { AllItems } from "../AllItems/AllItems.jsx"
import { Black } from "../Black/Black.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { Home } from "../Home/Home.jsx"
import { Item } from "../Item/Item.jsx"
import { Signin } from "../Login/Signin.jsx"
import { Signup } from "../Login/Signup.jsx"
import { Navbar } from "../Navbar/Navbar.jsx"
import { Payment } from "../Payment/Payment.jsx"

export const AllRoutes = ()=>{

    return(
        <div id="allroutes">
            <Navbar />
            <Black />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<AllItems />} />
                <Route path="/item" element={<Item />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </div>
    )
}