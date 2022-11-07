import dollar from "../assets/dollar.svg"
import cart from "../assets/cart.svg"

const VideoPaid = (props) => {
    const { id, name, isPurchased, duration, size, price, url, setCartItems, setData } = props.info ? props.info : props

    const handleClick = () => {
        // Mark this video as purchased
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

        // Update the items in the cart
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

    /**
     * Takes a string in the format "HH:mm:ss.s", and it the leading three numbers 
     * are zero then they will be removed, 
     * e.g. "00:00:14.32" -> "0:14.32"
     * @param {string} time the string in the format "HH:mm:ss.s" to be shortened.
     * @returns {string} shortened time value
     */
    const shortenedTime = (time) => {
        let startIdx = 0;
        for (startIdx; startIdx < 4; startIdx++) {
            if (time[startIdx] !== "0" && time[startIdx] !== ":") {
                break;
            }
        }
        return time.slice(startIdx)
    }
    
    return (
        <div className="videoContainer" >
            <video 
                className="video videoPaid" 
                type="video/mp4" 
                crossOrigin="true"
                style={{"filter": (!isPurchased && "blur(7px)")}}
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
                <p className="paidDuration">{shortenedTime(duration)}</p>
            </div>

        </div>
    )
}

export default VideoPaid