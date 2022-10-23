import { useState } from 'react'
import './App.css'
import VideoFree from './components/VideoFree'
import VideoPaid from './components/VideoPaid'
import CartWindow from './components/CardWindow'
import TheaterWindow from './components/TheaterWindow'
import Hero from './components/Hero'

function App() {

    return (
        <div className="App">
            <Hero />
            <main>
                <h1 className="browse">Browse</h1>
                <VideoFree />
                <VideoPaid />
                <CartWindow />
                <TheaterWindow />
            </main>

        </div>
    )
}

export default App


// components:
// -video-paid
// -video-free 
// -cart window
// theater-mode window
