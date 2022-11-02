import heart from "../assets/heart.svg"
import heartFill from "../assets/heartFill.svg"
import monitor from "../assets/monitor.svg"

const VideoFree = (props) => {
    const { key, name, isPurchased, duration, size, price, url } = props

    const handleMouseEnter = (event) => {
        event.target.controls = true
        console.log('in')
    }

    const handleMouseLeave = (event) => {
        event.target.controls = false
        console.log('out')
    }
    
    return (
        <div className="videoContainer" >
            <video className="video videoFree" 
                type="video/mp4" 
                crossOrigin="true" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                <source src={url}/>
            </video>

            <div className="videoInfo">
                <h3 className="videoTitle">{name}</h3>
                <p className="videoPrice">${price}</p>
            </div>

            <div className="hoverElement">
                <div className="hoverRow">
                    <div className="hoverIconContainer">
                        <img className="cart hoverIcon" src={heart} alt="click to add to cart" />
                    </div>
                    <div className="hoverIconContainer">
                        <img className="monitor hoverIcon" src={monitor} alt="click to view in theater mode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFree