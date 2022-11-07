import exit from "../assets/exit.svg"

const Theater = (props) => {
    const { theater, setTheater, } = props
    const handleClick = () => {
        // Remove video from theater array
        setTheater([])
    }

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