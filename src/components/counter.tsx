import { FC, useCallback, useEffect, useState } from "react";
import '../sass/components/counter.scss';

const Counter: FC<{ date: Date }> = ({ date }) => {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const calculateTimeLeft = useCallback(() => {
        const difference = +date - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }, [date]);

    useEffect(() => {
        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            setDays(timeLeft.days);
            setHours(timeLeft.hours);
            setMinutes(timeLeft.minutes);
            setSeconds(timeLeft.seconds);
        }, 1000);

        return () => clearTimeout(timer);
    }, [calculateTimeLeft]);
    
    return (
        <div className="counter">
            <div className="days">
                <h1>{days}</h1>
                <p>Dias</p>
            </div>
            <div className="hours">
                <h1>{hours}</h1>
                <p>Horas</p>
            </div>
            <div className="minutes">
                <h1>{minutes}</h1>
                <p>Minutos</p>
            </div>
            <div className="seconds">
                <h1>{seconds}</h1>
                <p>Segundos</p>
            </div>
        </div>
    );
};

export default Counter;