import VideoFree from "./VideoFree"
import VideoPaid from "./VideoPaid"
import FilterComponent from "./FilterComponent"
import FilterButton from "./FilterButton"

const Gallery = (props) => {
    const { data, setData, setTheater, setCartItems, filterData, setFilterData, showFilter, setShowFilter } = props

    return (
        <>
            {!showFilter ?
                <FilterButton setShowFilter={setShowFilter} /> :
            <div className="filterSection">
                <FilterComponent filterData={filterData} setFilterData={setFilterData} setShowFilter={setShowFilter} />
            </div>
            }
            
            {data.map(video => {
                const videoData = {
                    "id": video.id,
                    "name": video.name,
                    "isPurchased": video.isPurchased,
                    "isFavorite": video.isFavorite,
                    "duration": video.duration,
                    "size": video.size,
                    "price": video.price,
                    "url": video.url,
                    "setTheater": setTheater,
                    "setData": setData,
                }
                if (video.isFree || video.isPurchased) {
                    return <VideoFree key={video.id} info={videoData} />
                } else {
                    return <VideoPaid key={video.id} info={{
                        ...videoData,
                        setCartItems: setCartItems,
                        // setData: setData,
                    }} />
                }
            })}
        </>
    )
}

export default Gallery