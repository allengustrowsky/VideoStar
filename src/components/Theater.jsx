import exit from "../assets/exit.svg"

const Theater = (props) => {
    const { theater, setTheater, } = props
    const handleClick = () => {
        // Remove video from theater array
        setTheater([])
    }
// const duration = "00:00:16.93"
// const id = 0
// const isFree = false
// const isPurchased = false
// const name = "A Girl Taking a Selfie With Her Boyfriend"
// const price = 7.62
// const size = 7990219
// const url = "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"

    return (
        <div className="theaterContainer">
            <img className="exit" onClick={handleClick} src={exit} alt="leave theater mode" />
            <div className="theaterVidContainer">
                <video 
                    className="theaterVideo" 
                    type="video/mp4" 
                    crossOrigin="true"
                    controls
                >
                    <source src={theater[0].url}/>
                </video>
            </div>
            <h2 className="theaterTitle">{theater[0].name}</h2>
        </div>
    )
 }

 export default Theater