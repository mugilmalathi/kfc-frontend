import "./Footer.css"
import footer from "../images/footer.png"

export const Footer = ()=>{

    return(
        <div id="footer">
            <p>Calorie Statement</p>
            <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary.</p>
            <p>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.
Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>

             <img src={footer}/>
        </div>
    )
}