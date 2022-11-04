import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import VideoFree from './components/VideoFree'
import VideoPaid from './components/VideoPaid'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Recommended from './components/Recommended'
import Theater from './components/Theater'


function App() {
    const [data, setData] = useState([])
    const [theater, setTheater] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [showCart, setShowCart] = useState(true)

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
        <div className="App" style={{
                // disable normal page pointer events when in theater mode
                "pointerEvents": theater.length > 0 && "none",
            }}>
            <header>
                <Hero />
            </header>
            <main>
                {showCart && <Cart setShowCart={setShowCart} cartItems={cartItems}/>}
                {theater.length > 0 && <Theater theater={theater} setTheater={setTheater} />}
                <h1 className="browse">Browse</h1>
                <Recommended 
                    videos={data}
                    setCartItems={setCartItems}
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
                                    "id": video.id,
                                    "name": video.name,
                                    "isPurchased": video.isPurchased,
                                    "duration": video.duration,
                                    "size": video.size,
                                    "price": video.price,
                                    "url": video.url,
                                    "setTheater": setTheater
                                }
                            if (video.isFree || video.isPurchased) {
                                return <VideoFree key={video.id} info={videoData} />
                            } else {
                                return <VideoPaid key={video.id} info={{...videoData, setCartItems: setCartItems}} />
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
// replace px with rem in some places?
//add a readme.md
// add border radius to theater view
// pu tin the while-loading spinner
//prevent duplicate entry into cart