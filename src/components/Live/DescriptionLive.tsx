import CounterLive from "./CounterLive"

const DescriptionLive = () => {
    return (
        <div className="descriptionlive">

            <div className="pentagon">
                <div className="description-content">
                    <h3 className="subtitle">24 de Marzo 2023</h3>
                    <h3 className="subtitle">11:00 AM</h3>

                    <h1 style={{color:'white'}}>Title</h1>
                    <p style={{color:'white'}}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <CounterLive />
                </div>
            </div>

        </div>
    )
}

export default DescriptionLive