import dollar from "../assets/dollar.svg"
import cart from "../assets/cart.svg"

const VideoPaid = (props) => {
    const { key, name, isPurchased, duration, size, price, url } = props
    
    return (
        <div className="videoContainer" >
            <video className="video videoPaid" type="video/mp4" crossOrigin="true">
                <source src={url}/>
            </video>
            <div className="videoInfo">
                <h3 className="videoTitle">{name}</h3>
                <p className="videoPrice">${price}</p>

            </div>
            <img className="dollar" src={dollar}/>
            <div className="hoverElement">
                <div className="paidHoverIconCont hoverIconContainer">
                    <img className="cart hoverIcon" src={cart} alt="click to add to cart" />
                </div>
            </div>

        </div>
    )
}

export default VideoPaid