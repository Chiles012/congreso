import CounterLive from "./CounterLive"
import ProgressBar from "./ProgressBar"

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

        </div>
    )
}
export default DescriptionLive  