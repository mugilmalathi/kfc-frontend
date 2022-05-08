import "./AllItems.css"
import { Link } from "react-router-dom"

export const AllItems = ()=>{

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
                    <div>
                        <img id="allitems-grid-img" src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <Link to="/item"><p>Side Lovers 8pc. Chicken Meal</p></Link>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>
                    <div>
                        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <p>Side Lovers 8pc. Chicken Meal</p>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>
                    <div>
                        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <p>Side Lovers 8pc. Chicken Meal</p>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>
                    <div>
                        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <p>Side Lovers 8pc. Chicken Meal</p>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>
                    <div>
                        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <p>Side Lovers 8pc. Chicken Meal</p>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>
                    <div>
                        <img src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                        <p>Side Lovers 8pc. Chicken Meal</p>
                        <p>calories: 2580-5640</p>
                        <p>Set location for pricing.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
