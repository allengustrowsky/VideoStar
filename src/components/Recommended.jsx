import { useState } from "react"
import { useEffect } from 'react'
import VideoPaid from "./VideoPaid"
import VideoFree from "./VideoFree"
import spinner from "../assets/spinner.svg"

const Recommended = (props) => {
    const { videos, setCartItems, setData, setTheater, isLoading, setIsLoading } = props
    const [recommended, setRecommended] = useState([])

    // Get all recommended videos
    const recommendedVideos = () => {
        return videos.filter(video => video.isFree === false)
    }

    // On mount, set reecommendedFive state to have five recommended 
    // videos (or however many up to that point are available)
    useEffect(() => {
        setRecommended(recommendedVideos())
    }, [videos])

    return (
        <section className="recommendedContainer">
            <div className="recHeaderContainer">
                <h2>Recommended</h2>
            </div>

            <hr />
            <div className="recCardContainer">
                {isLoading ?
                    // Load spinner if videos are still loading
                    <img className="spinner" src={spinner} alt="page loading" /> :

                    recommended.map((video, idx) => {
                        // Limit to 5 paid videos recommended at a time
                        if (idx < 5) { 
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
                                return <VideoFree
                                    key={video.id}
                                    info={{
                                        ...videoData,
                                        setTheater: setTheater,
                                    }}
                                />
                            } else {
                                return <VideoPaid
                                    key={video.id}
                                    info={{
                                        ...videoData,
                                        setCartItems: setCartItems,
                                    }}
                                />
                            }
                        }
                    })}
            </div>
        </section>
    )
}

export default Recommended