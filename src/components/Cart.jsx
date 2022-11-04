import exit from "../assets/exit.svg"
import rightArrow from "../assets/arrow.svg"
import CartVideo from "../components/CartVideo"

const Cart = (props) => {
    const { setShowCart, cartItems, setCartItems } = props

    const sum = 0 // use reduce here

    const handleClick = () => {
        setShowCart(false)
    }

    return (
        <div className="cartContainer">
            <div className="cartHeader">
                <p>My Cart</p>
                <img id="cartExitIcon" src={exit} alt="close cart window" onClick={handleClick}/>
            </div>

            <hr />

            <div className="cartItemsContainer">
                {cartItems.map((item, index) => {
                    return <CartVideo key={index} items={{...item, setCartItems: setCartItems}} />
                })}
            </div>

            <p className="total">Total: ${sum}</p>

            <hr />

            {cartItems.length > 0 && (<button id="completeOrderBtn">
                <p>Complete Order</p>
                <img id="rightArrow" src={rightArrow} alt="right arrow" />
            </button>)}
        </div>
    )
}

export default Cart