import "./Item.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export const Item = (id)=>{

    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/items/${id}`)
        .then((res)=>{
            setList(res.data);
        })
    }, [])
    return(
        <div id="item">

            <div id="item-left">
                <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75&w=1280" alt="" />
            </div>

            <div id="item-right">
               <h1>Side Lovers 8pc. Chicken Meal.</h1>
                <p>8 pieces of our freshly prepared World Famous Chicken, 3 large sides of your choice, and 4 biscuits.</p>
                <p>Price: $8</p>
                <p>calories: 2580-5640</p>
                <br />
                <hr />
                <br />
                <p>Recipe:Original Recipe</p>
                <p>Side:Secret Recipe Fries</p>
                <p>Side:Mashed Potatoes & Gravy</p>
                <p>Side:Mac & Cheese</p>
                <br />
                <hr />
                <br />
                <Link to="/payment"><button id="payment">Pick Store For Price</button></Link>
            </div>

        </div>
    )
}