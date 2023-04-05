import CounterLive from "./CounterLive"
import {conference} from '../../assets'

const DescriptionLive = () => {
    return (
        <div className="descriptionlive">
             
            <div className="description-content">

                <h3 className="subtitle">24 de Marzo 2023</h3>
                <h3 className="subtitle">11:00 AM</h3>

                <h1 style={{ margin: '1rem' }}>Title</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <CounterLive />
            </div>
            <video  src={conference} loop muted autoPlay></video>
        </div>
    )
}
export default DescriptionLive  