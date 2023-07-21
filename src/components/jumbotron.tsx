import { Link } from 'react-router-dom';
import '../sass/components/jumbotron.scss';
import { useEffect, useMemo, useState } from 'react';
import { Counter } from '.';

const Jumbotron = () => {
    // get tomorrow's date
    const tomorrow = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }, []);

    return (
        <div className="jumbotron">
            <nav className="container">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <Link to="/"><li>Inicio</li></Link>
                        <Link to="/videos"><li>Videos</li></Link>
                        <Link to="/login"><li>Login</li></Link>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron-content">
                <div className="container">
                    <Counter date={tomorrow} />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;