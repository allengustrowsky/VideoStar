import trash from "../assets/trash.svg"


const cartVideo = (props) => {
    const { id, name, price, url, setData, setCartItems } = props.items

    const handleClick = () => {
        // Unmark this video as purchased
        setData(prevData => prevData.map(video => {
            if (video.id === id) {
                return {
                    ...video,
                    isPurchased: false,
                    isFavorite: false,
                }
            } else {
                return video
            }
        }))

        // Update which items are in cart
        setCartItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        })
    }

    return (
        <>
            <div className="videoTrashContainer">
                <video className="cartVideo" type="video/mp4" crossOrigin="true">
                    <source src={url} />
                </video>
                <img className="trashIcon" src={trash} alt="remove from cart" onClick={handleClick} />
            </div>

            <div className="CVTextContainer">
                <p className="CVText">{name}</p>
                <p className="VCPrice">${price}</p>
            </div>
        </>

    )
}

export default cartVideo