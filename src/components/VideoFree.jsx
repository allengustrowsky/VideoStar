import heart from "../assets/heart.svg"
import heartFill from "../assets/heartFill.svg"
import monitor from "../assets/monitor.svg"

const VideoFree = (props) => {
    const { id, name, isPurchased, isFavorite, duration, size, price, url, setTheater, setData } = props.info ? props.info : props

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

    const handleClickFavorite = () => {
        // mark this video as favorited
        setData(prevData => prevData.map(video => {
            if (video.id === id) {
                return {
                    ...video,
                    isFavorite: !video.isFavorite
                }
            } else {
                return video
            }
        }))
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
                        <img className="cart hoverIcon" 
                            src={isFavorite ? heartFill : heart} 
                            alt="click to toggle favorite status" 
                            onClick={handleClickFavorite}
                        />
                    </div>
                    <div className="hoverIconContainer">
                        <img className="monitor hoverIcon"
                            onClick={handleClickTheater} 
                            src={monitor} 
                            alt="click to view in theater mode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFree