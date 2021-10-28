import { DriverStats, TripTime, StatusCircle, AppButton, TripTimer } from "../components"
import './styles/Home.css'

const Home: React.FC = () => {
    return (
        <>
            <DriverStats name="Bryan Mora" />
            <TripTime />
            <StatusCircle />
            <TripTimer/>
            <div id="homeButton">
                <AppButton />
            </div>
        </>
    )
}

export default Home
