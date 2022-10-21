import { useState } from 'react'
import './App.css'
import VideoFree from './components/VideoFree'
import VideoPaid from './components/VideoPaid'
import CartWindow from './components/CardWindow'
import TheaterWindow from './components/TheaterWindow'

function App() {

    return (
        <div className="App">
            <VideoFree />
            <VideoPaid />
            <CartWindow />
            <TheaterWindow />
        </div>
    )
}

export default App


// components:
// -video-paid
// -video-free 
// -cart window
// theater-mode window
