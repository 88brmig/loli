import { DriverStats, TripTime, StatusCircle, AppButton } from "../components"
import './styles/Home.css'

const Home: React.FC = () => {
    return (
        <>
            <DriverStats name="Bryan Mora" />
            <TripTime />
            <StatusCircle />
            <div id="homeButton">
                <AppButton />
            </div>
        </>
    )
}

export default Home
