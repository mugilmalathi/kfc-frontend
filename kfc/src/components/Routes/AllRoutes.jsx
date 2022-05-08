import { Route, Routes } from "react-router"
import { Black } from "../Black/Black.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { Home } from "../Home/Home.jsx"
import { Navbar } from "../Navbar/Navbar.jsx"

export const AllRoutes = ()=>{

    return(
        <div id="allroutes">
            <Navbar />
            <Black />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}