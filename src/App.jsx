import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import VideoFree from './components/VideoFree'
import VideoPaid from './components/VideoPaid'
import CartWindow from './components/CardWindow'
import TheaterWindow from './components/TheaterWindow'
import Hero from './components/Hero'
import Recommended from './components/Recommended'

function App() {
    const [data, setData] = useState([])
    
    // Fetch data from api
    useEffect(() => {
        const loadData = async () => {
            try {
                const apiData = await fetch("https://videostar.dacoder.io/")
                const jsonData = await apiData.json()
                setData(jsonData)
            } catch (error) {
                console.log(error)
            }
        }
        loadData()
    }, [])

    //pass handler functions to components, not state values themselves
    return (
        <div className="App">
            <header>
                <Hero />
            </header>
            <main>
                <h1 className="browse">Browse</h1>
                <Recommended 
                    videos={data}
                    // recommendedVideos={recommendedVideos}
                    // setRecommended={setRecommended} 
                />
                <section className="gallery">
                    <div className="galleryHeadContainer">
                        <h2 className="galleryHeader">Movies We Think You'll Like</h2>
                        <select name="filterBtn" id="filterBtn">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="galleryMain">
                        {data.map(video => {
                                const videoData={
                                    "key": video.id,
                                    "name": video.name,
                                    "isPurchased": video.isPurchased,
                                    "duration": video.duration,
                                    "size": video.size,
                                    "price": video.price,
                                    "url": video.url,
                                }
                            if (video.isFree) {
                                return <VideoFree info={videoData} />
                            } else {
                                return <VideoPaid info={videoData} />
                            }
                        })}
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2022 Video Star, Inc. All Rights Reserved</p>
            </footer>

        </div>
    )
}

export default App


// components:
// -video-paid
// -video-free 
// -cart window
// theater-mode window

// responsiveness of main gallery (always have full rows)
// box-shadowing and similar
//scroll bar distance from cards recommended
// rremove empty css rules
// add a circular rotational image until the data loads