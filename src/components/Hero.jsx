import heroImg from "../assets/heroBackground2.jpg"

const Hero = (props) => {
    return (
        <div className="heroContainer">
            <img className="heroImg" src={heroImg} alt="Movie scene"/>
        </div>
    )
}

export default Hero