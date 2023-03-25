import CounterLive from "./CounterLive"
import { Logo } from "../../assets"

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

            <div className="carrousel-content">
                <div className="carrousel-cards">
                    <div className="card_box">
                        Hola
                    </div>
                    <div className="card_box">
                        Hola
                    </div>
                    <div className="card_box">
                        Hola
                    </div>
                </div>
            </div>

            <div className="about-container">
                <div className="about-content">
                    <img src={Logo} className="about-image" />
                    <div className="about-text">
                        <h2>About Lorem</h2>
                        <p> Lorem ipsum dolor sit,
                             amet consectetur adipisicing elit. Iusto maxime, et nignissimos tenetur enim deserunt doloribus!</p>
                    </div>
                </div>
            </div>

            <div className="reservation-container">
                <div className="reservation">
                    <h3 className="subtitle">Reserva ahora</h3>
                    <button style={{backgroundColor:"white" , borderRadius:'1rem'}}>  <h1 style={{ margin: '1rem' }}>RESERVAR</h1></button>
                  
                </div>
            </div>
        </div>
    )
}

export default DescriptionLive