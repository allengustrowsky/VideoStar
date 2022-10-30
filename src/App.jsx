import { useState } from 'react'
import './App.css'
import VideoFree from './components/VideoFree'
import VideoPaid from './components/VideoPaid'
import CartWindow from './components/CardWindow'
import TheaterWindow from './components/TheaterWindow'
import Hero from './components/Hero'
import Recommended from './components/Recommended'

function App() {

    return (
        <div className="App">
            <header>
                <Hero />
            </header>
            <main>
                <h1 className="browse">Browse</h1>
                <Recommended />
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
                        {[...Array(16)].map(_ => <VideoPaid />)}
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