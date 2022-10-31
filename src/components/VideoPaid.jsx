import dollar from "../assets/dollar.svg"

const VideoPaid = (props) => {
    const { key, name, isPurchased, duration, size, price, url } = props
    
    return (
        <div className="videoPaidContainer" >
            <video type="video/mp4" crossOrigin="true" style={{width: "355px", height: "200px", filter: "blur(7px)"}}>
                <source src={url}/>
            </video>
            {/* <img className="paidThumbnail thumbnail" type="video/mp4" src={url} alt="movie thumbnail" width="355px" height="200px" /> */}
            <div className="videoInfo">
                <h3 className="videoTitlePaid">{name}</h3>
                <p className="videoPrice">${price}</p>

            </div>
            <img className="dollar" src={dollar}/>

        </div>
    )
}

export default VideoPaid