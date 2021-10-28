import Countdown from 'react-countdown'
import "./styles/TripTimer.css"

export const TripTimer = () => {
    return (
        <div id="tripTimer" className="text-2xl text-center">
            <Countdown daysInHours={true} zeroPadTime={2} date={Date.now() + 10000000} />
            <h3 className="text-lg">Hora del viaje</h3>
        </div>
    )
}