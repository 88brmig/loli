import { IonPage } from "@ionic/react"
import { DriverStats, TripTime, StatusCircle } from "../components"

const Home: React.FC = () => {
    return (
        <>
            <DriverStats name="Bryan Mora" />
            <TripTime />
            <StatusCircle/>
        </>
    )
}

export default Home
