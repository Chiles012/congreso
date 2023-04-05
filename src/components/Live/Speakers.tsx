import SpeakersCard from "./SpeakersCard"
import { perfil1, perfil2 , perfil3 , perfil4 } from "../../assets"
const Speakers = () => {
    return (
        <div className="speakers-container">
            <div className="speakers-title-info">
                <h2 className="speakers-title">Speakers</h2>
                <p>Lorem Ipsum</p>
            </div>
            <div className="speakers-content">
                <SpeakersCard image={perfil1} flexDir="row"/>
                <SpeakersCard image={perfil2} flexDir="row"/>
                <SpeakersCard image={perfil3} flexDir="row"/>
                <SpeakersCard image={perfil4} flexDir="row-reverse"/>
                <SpeakersCard image={perfil3} flexDir="row-reverse"/>
                <SpeakersCard image={perfil1} flexDir="row-reverse"/>
                <SpeakersCard image={perfil3} flexDir="row"/>
                <SpeakersCard image={perfil1} flexDir="row"/>
                <SpeakersCard image={perfil4} flexDir="row"/>
            </div>
        </div>
    )
}

export default Speakers