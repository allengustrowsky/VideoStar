import VideoFree from "./VideoFree"
import VideoPaid from "./VideoPaid"
import FilterComponent from "./FilterComponent"
import FilterButton from "./FilterButton"
import SortButton from "./SortButton"
import SortDropdown from "./SortDropdown"
import { useState } from "react"
import { useEffect } from "react"

const Gallery = (props) => {
    const { data, setData, setTheater, setCartItems, showFilter, setShowFilter, } = props

    const [filterData, setFilterData] = useState({
        "title": "",
        "minLength": 0,
        "maxLength": 60,
        "free": false,
        "paid": false,
        "favorite": false,
        "purchased": false,
    })
    const [filterVideos, setFilterVideos] = useState([])
    // possible values for sortType: "title", "length", "free", "paid", default: ""
    const [sortType, setSortType] = useState("")
    
    /**
     * Takes a formatted duration string in "mm:ss.s" format and converts 
     * it to an integer value.
     * @param {string} time the time in "mm:ss" format to be converted to an 
     * integer of seconds.
     * @return {int} the integer value of a time equal to 100 times the 
     * total number of seconds.
     */
    const timeToSeconds = (time) => {
        const min = parseInt(time.split(":")[0])
        const sec = time.split(":")[1]
        const wholeSec = parseInt(sec.split(".")[0])
        const ms = parseInt(sec.split(".")[1])
        return (min * 6000) + (wholeSec * 100) + ms
    }

    /**
     * Takas an array of videos and sorts them according to the sortType
     * state variable
     * @param {array} videos videos to be sorted
     * @returns sorted array of videos
     */
    const sortVideos = (videos) => {
        switch (sortType) {
            case "title":

                return videos.sort((first, second) => {
                    return -(first.name.toLowerCase() < second.name.toLowerCase())
                        || +(first.name.toLowerCase() > second.name.toLowerCase())
                })
            case "length":
                return videos.sort((first, second) => {
                    return -(timeToSeconds(first.duration.slice(3)) < timeToSeconds(second.duration.slice(3)))
                        || +(timeToSeconds(first.duration.slice(3)) > timeToSeconds(second.duration.slice(3)))
                })
            case "free":
                return videos.sort((first, second) => {
                    return -(first.isFree && !second.isFree)
                        || +(!first.isFree && second.isFree)
                })
            case "paid":
                return videos.sort((first, second) => {
                    return -(!first.isFree && second.isFree)
                        || +(first.isFree && !second.isFree)
                })
            default:
                return videos
        }
    }

    // Only keep videos that match filter criteria
    useEffect(() => {
        const filteredVideos = data.filter((video) => {
            // Get video length values in terms of integers in seconds
            const videoSeconds = timeToSeconds(video.duration.slice(3))
            const lower = filterData.minLength * 100
            const upper = filterData.maxLength * 100

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
        setFilterVideos(sortVideos(filteredVideos))
    }, [data, filterData, sortType])
    
    return (
        <>
            {!showFilter ?
                <FilterButton setShowFilter={setShowFilter} /> :
                <div className="filterContainer">
                    <FilterComponent filterData={filterData} setFilterData={setFilterData} setShowFilter={setShowFilter} />
                </div>
            }

            {
                <SortDropdown sortType={sortType} setSortType={setSortType} />
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
                    }} />
                }
            })}
        </>
    )
}

export default Gallery