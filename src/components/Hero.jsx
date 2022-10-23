import HeroImg from "../assets/heroBackground2.jpg"

const Hero = (props) => {
    return (
        <div className="heroContainer">
            <img className="heroImg" src={HeroImg} alt="Movie scene"/>
        </div>
    )
}

export default Hero