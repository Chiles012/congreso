import { Logo } from "../assets"
import { List } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <>
            <header>
                <img src={Logo} alt="logo congreso" />
                <List
                    size={30}
                />
            </header>
        </>
    )
}

export default Header