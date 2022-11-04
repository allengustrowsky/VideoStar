import { useState } from "react"


const cartVideo = (props) => {
    const { name, price, url, id} = props.items
    console.log('url: ' + url)

    return (
        <div className="cartVideo">
            <video className="cartVideo" type="video/mp4" crossOrigin="true">
                <source src={url} />
            </video>
            <div className="CVTextContainer">
                <p className="CVText">{name}</p>
                <p className="VCPrice">${price}</p>
            </div>
        </div>
    )
}

export default cartVideo