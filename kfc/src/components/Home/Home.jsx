// import Carousel from 'react-bootstrap/Carousel'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css"


export const Home = ()=>{

    return(
        <div id="home">
           <Carousel>
                <div id='car1'>
                    <img id='car-img' src="https://images.ctfassets.net/9tka4b3550oc/fc4ZkEOmImAJBQ7eMPHO7/660c545459ecb42139fa6c62af696d01/Side-Lovers.jpg?q=75&w=1680" />
                </div>
                <div id='car2'>
                    <video loop autoPlay muted src="https://videos.ctfassets.net/9tka4b3550oc/3eVt04hBZVfN6MVMzEv4Rt/26a3f084c23ab3484870f7d544550853/1920x1080_KFC_App-Hero-Asset_05.mp4?q=75&w=1680" type="video/mp4">
                    </video>
                </div>
                <div id='car3'>
                    <img id='car-img' src="https://images.ctfassets.net/9tka4b3550oc/5oTs9jzHPhtVyJGNX9coGR/e314c31f5eef9f3c661959102d7cbd53/Mothersday_Desktop_HomeHero-PostPromo_2x.jpg?q=75&w=1680" />
                </div>
                <div id='car4'>
                    <img id='car-img' src="https://images.ctfassets.net/9tka4b3550oc/73uh7kGjX7jV10noQWKmK7/ddec360bf6ffc625158aaa5e48a1f046/Jack_Harlow_Hero.png?q=75&w=1680" />
                </div>
            </Carousel>

            <div id='reddiv'>
                <h3 id='finger'>FINGER LICKIN' GOOD IS NOW JUST A FEW CLICKS AWAY</h3>
                <button id='redstart'>Start Order</button>
            </div>

            <h1 id='feature'>FEATURED ITEMS</h1>

            <div id='card'>

                <div id="card-left">
                    <div id='card-left-div'>
                        <img id='card-left-div-img'  src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloversCOBmeal?q=75" alt="" />
                    </div>
                    <p id='card-left-p'>Sides Lovers 8 pc. Tenders Meal</p>
                    <p id='card-left-p'>calories: 2650-4330</p>
                    <p id='card-left-p'>Set Location for pricing</p>
                </div>

                <div id='card-right'>
                    <div id='card-right-div'>
                        <img id='card-right-div-img' src="https://digitaleat.kfc.com/menus/image/bare/kfc-sidesloverstendersmeal?q=75" alt="" />
                    </div>
                    <p id='card-right-p'>Sides Lovers 8 pc. Chicken Meal</p>
                    <p id='card-right-p'>calories: 2580-5640</p>
                    <p id='card-right-p'>Set Location for pricing</p>
                </div>
            </div>

            <div id='video'>
               <video loop autoPlay muted src="https://videos.ctfassets.net/9tka4b3550oc/6dfcRcbEacDiiOabonCLsL/e30a82a829391e36cda9431693faaa6f/ZWAK12819H_Non-slated_MOS_HQ_optimized2.mp4?q=75&w=1680" type="video/mp4"></video>
            </div>

            <div id='fries'>

            </div>

        </div>
    )
}