import { IonPage } from "@ionic/react"
import { DriverStats, TripTime } from "../components"

const Home: React.FC = () => {
    return (
        <IonPage>
            <DriverStats name="Bryan Mora" />
            <TripTime />
        </IonPage>
    )
}

export default Home
