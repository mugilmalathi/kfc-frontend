import "./AllItems.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

export const AllItems = ()=>{

    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/items")
        .then((res)=>{
            setList(res.data);
        })
    }, [])

    return (
        <div id="allitems">

            <div id="allitems-left">
                <img src="https://kfccatering.com/wp-content/uploads/2020/08/KFC_RedStripes_web.png" alt="" />
                <h1>KFC MENU</h1>
                <h4>Featured</h4>
                <h5>Jack's Favorites</h5>
                <h5>Buckets</h5>
                <h5>Tenders</h5>
                <h5>Sandwitches</h5>
                <h5>Fried Chicken</h5>
                <h5>Pot Pies & Bowls</h5>
                <h5>A La Carte</h5>
                <h5>Sides</h5>
                <h5>Sauces</h5>
                <h5>Desserts</h5>
                <h5></h5>
            </div>

            <div id="allitems-right">
                <h1>FEATURED</h1>
                <div id="allitems-grid">

                    {
                        list.map(e=>
                            <div>
                                <img id="allitems-grid-img" src={e.img} alt="" />
                                <Link to="/item"><p>{e.title1}</p></Link>
                                <p>{e.title2}</p>
                                <p>{e.title3}</p>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}
