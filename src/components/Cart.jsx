import exit from "../assets/exit.svg"
import CartVideo from "../components/CartVideo"
import { useEffect, useState } from "react"


const Cart = (props) => {
    const { setData, setShowCart, cartItems, setCartItems } = props
    const [total, setTotal ] = useState(0) 

    useEffect(() => {
        setTotal(cartItems.reduce((tot, curr) => {
            return tot + curr.price
        }, 0))
    })

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
                    return <CartVideo key={index} items={{
                        ...item, 
                        setData: setData,
                        setCartItems: setCartItems
                    }} />
                })}
            </div>

            <hr />

            <p className="total">Total: ${total}</p>
        </div>
    )
}

export default Cart