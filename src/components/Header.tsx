import { Logo } from "../assets"
import { List } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <>
            <header style={{  backgroundColor: 'rgba(0, 167, 230, .5)'}}>
                <img src={Logo} alt="logo congreso" />
                <div className="">
                    <nav className="">
                        <ol className="description-nav">
                            <li className="crumb"><a href="#">Home</a></li>
                            <li className="crumb"><a href="#">Videos</a></li>
                            <li className="crumb"><a href="#">Redes</a></li>
                            <li className="crumb"><a href="#">Subscribe</a></li>
                        </ol>
                    </nav>
                </div>
                <List
                    size={30}
                />
            </header>
        </>
    )
}

export default Header