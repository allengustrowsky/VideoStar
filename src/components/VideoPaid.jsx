import dollar from "../assets/dollar.svg"
import cart from "../assets/cart.svg"

const VideoPaid = (props) => {
    const { id, name, isPurchased, duration, size, price, url, setCartItems, setData } = props.info ? props.info : props

    const handleClick = () => {
        // mark this video as purchased
        setData(prevData => prevData.map(video => {
            if (video.id === id) {
                return {
                    ...video,
                    isPurchased: true
                }
            } else {
                return video
            }
        }))

        // update the items in the cart
        setCartItems(prevItems => {
            const newCarItems = prevItems.filter(item => item.id !== id)
            newCarItems.push({
                id: id,
                name: name,
                url: url,
                price: price,
            })

            return newCarItems
        })
    }
    
    return (
        <div className="videoContainer" >
            <video className="video videoPaid" type="video/mp4" crossOrigin="true"
                // style={{"filter": (!isPurchased && "blur(7px)")}}>
                >
                <source src={url}/>
            </video>
            <div className="videoInfo">
                <h3 className="videoTitle">{name}</h3>
                <p className="videoPrice">${price}</p>

            </div>
            <img className="dollar" src={dollar}/>
            <div className="hoverElement">
                <div className="paidHoverIconCont hoverIconContainer">
                    <img className="cart hoverIcon" src={cart} alt="click to add to cart" onClick={handleClick} />
                </div>
            </div>

        </div>
    )
}

export default VideoPaid