import { Logo } from "../../assets"

const About = () => {
    return (
        <div className="about-container">
        <div className="about-content">
            <div className="about-image-container">
                <img src={Logo} className="about-image" />
            </div>

            <div className="about-text">
                <h2>About Lorem</h2>
                <p> La educación Montessori es un enfoque de enseñanza que se basa en la idea de que los niños son naturalmente curiosos y autodirigidos. En lugar de imponer un plan de estudios rígido, los educadores Montessori crean un ambiente de aprendizaje en el que los niños pueden explorar y descubrir a su propio ritmo. Los materiales de aprendizaje Montessori están diseñados para ayudar a los niños a desarrollar habilidades prácticas y cognitivas, y a fomentar su creatividad y pensamiento crítico. Los educadores Montessori también se centran en el desarrollo social y emocional de los niños, animándoles a trabajar juntos, a respetarse mutuamente y a aprender de los demás. En el Congreso Montessori de este año, tendremos la oportunidad de explorar nuevas ideas y enfoques de la educación Montessori, y de compartir nuestras propias experiencias y conocimientos con otros educadores Montessori de todo el mundo. Juntos, podemos continuar construyendo un futuro brillante para la educación y el aprendizaje de los niños.</p>
            </div>
        </div>
    </div>
    )
}

export default About