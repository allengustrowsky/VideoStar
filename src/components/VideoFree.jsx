import heart from "../assets/heart.svg"
import heartFill from "../assets/heartFill.svg"
import monitor from "../assets/monitor.svg"

const VideoFree = (props) => {
    const { id, name, isPurchased, duration, size, price, url, setTheater } = props.info ? props.info : props

    const handleMouseEnter = (event) => {
        event.target.controls = true
    }

    const handleMouseLeave = (event) => {
        event.target.controls = false
    }

    const handleClickTheater = () => {
        setTheater([{
            "id": id,
            "name": name,
            "url": url,
        }])
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

            <div className="videoInfo videoInfoFree">
                <h3 className="videoTitle">{name}</h3>
                {/* <p className="videoPrice">${price}</p> */}
            </div>

            <div className="hoverElement">
                <div className="hoverRow">
                    <div className="hoverIconContainer">
                        <img className="cart hoverIcon" src={heart} alt="click to add to cart" />
                    </div>
                    <div className="hoverIconContainer">
                        <img className="monitor hoverIcon" onClick={handleClickTheater} src={monitor} alt="click to view in theater mode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFree