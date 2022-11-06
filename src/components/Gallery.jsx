import VideoFree from "./VideoFree"
import VideoPaid from "./VideoPaid"
import FilterComponent from "./FilterComponent"
import FilterButton from "./FilterButton"
import { useState } from "react"
import { useEffect } from "react"

const Gallery = (props) => {
    const { data, setData, setTheater, setCartItems, filterData, setFilterData, showFilter, setShowFilter } = props
    const [ filterVideos, setFilterVideos ] = useState([])

    /**
     * Takes a formatted string in "mm:ss" format and converts it to an integer 
     * value.
     * @param {string} time the time in "mm:ss" format to be converted to an 
     * integer of seconds.
     * @return {int} the number of seconds represented by the passed value.
     */
    const timeToSeconds = (time) => {
        const min = parseInt(time.split(":")[0])
        const sec = parseInt(time.split(":")[1])
        return (min * 60) + sec
    }
    
    // Only keep videos that match filter criteria
    useEffect(() => {
        const filteredVideos = data.filter((video) => {
            // Get video length values in terms of integers in seconds
            const videoSeconds = timeToSeconds(video.duration.slice(3, 8))
            const lower = filterData.minLength
            const upper = filterData.maxLength

            // Handle the condition for the free/paid inputs
            const freePaidCondition =  
                ((filterData.free ? video.isFree : true) // handle single inputs checked
                && (filterData.paid ? !video.isFree : true)) // handle single inputs checked
                || (!filterData.free && !filterData.paid) // handle both free/paid inputs empty (should allow all videos through in this case)
                || (filterData.free && filterData.paid) // handle both free/paid inputs checked (should allow all videos through)

            
            // Compound condition for filtering videos
            const condition = (true &&
                video.name.toLowerCase().includes(filterData.title.toLowerCase()) // if provided string in name (case insensitive)
                && videoSeconds > lower && videoSeconds < upper // if video is in specified time range
                && freePaidCondition // handle free/paid filter inputs
                && (filterData.favorite ? video.isFavorite : true) // filter by favorites only if the input is checked, else pass all
                && (filterData.purchased ? video.isPurchased : true)
                )
            return condition
        })
        setFilterVideos(filteredVideos)
    }, [data, filterData])

    return (
        <>
            {!showFilter ?
                <FilterButton setShowFilter={setShowFilter} /> :
            <div className="filterSection">
                <FilterComponent filterData={filterData} setFilterData={setFilterData} setShowFilter={setShowFilter} />
            </div>
            }
            
            {filterVideos.map(video => {
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