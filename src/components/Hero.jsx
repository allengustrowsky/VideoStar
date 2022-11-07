import heroImg from "../assets/heroBackground2.jpg"
import cart from "../assets/cart.svg"

const Hero = (props) => {
    const { showCart, setShowCart } = props

    const handleClick = () => {
        setShowCart(true)
    }
    
    return (
        <div className="heroContainer">
            {!showCart ? <img className="showCartIcon" src={cart} alt="click to show cart" onClick={handleClick} /> : <div className="heroFiller"></div>}
            <img className="heroImg" src={heroImg} alt="Movie scene"/>
        </div>
    )
}

export default Hero