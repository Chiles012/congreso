import ProgressBar from "./ProgressBar"
const CounterLive = () => {



    return (
        <div className="counter">
            <h3 style={{ fontSize: '2rem' }}>El en vivo empieza en:</h3>
            <div className="container-counter">
                <ProgressBar title={'Dias'} size={100} progress={10} color='#fb4b4b' stroke='#fb4b4b' />
                <ProgressBar title={'Horas'} size={100} progress={90} color='#82CD47' stroke='#82CD47' />
                <ProgressBar title={'Minutos'} size={100} progress={70} color='#E7B10A' stroke='#E7B10A' />
                <ProgressBar title={'Segundos'} size={100} progress={40} color='#FC7300' stroke='#FC7300' />
            </div>

        </div>
    )
}

export default CounterLive