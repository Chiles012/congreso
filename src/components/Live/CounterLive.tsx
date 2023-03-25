const CounterLive = () => {
    return (
        <div className="counter">
            <h3 style={{ fontSize:'2rem'}}>El en vivo empieza en:</h3>
            <div className="container-counter">
                <div className="counter-item">
                    <h1>00</h1>
                    <p>Dias</p>
                </div>
                <div className="counter-item">
                    <h1>00</h1>
                    <p>Horas</p>
                </div>
                <div className="counter-item">
                    <h1>00</h1>
                    <p>Minutos</p>
                </div>
                <div className="counter-item">
                    <h1>00</h1>
                    <p>Segundos</p>
                </div>
            </div>
        </div>
    )
}

export default CounterLive