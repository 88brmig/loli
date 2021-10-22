import { IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonAvatar, IonToggle } from "@ionic/react"
import { useState } from "react"
import defaultImage from '../assets/img/mlnmsk.jpeg'
import "./styles/DriverStats.css"

type props = {
    photo?: string,
    name: string,
}

export const DriverStats = ({ photo, name }: props) => {
    const [online, setOnline] = useState(false)

    return (
            <IonCard className="flex h-48 bg-white shadow-lg">
                <IonCardHeader className="p-0 w-1/3">
                    <IonAvatar>
                        <img src={photo ?? defaultImage} alt="" />
                    </IonAvatar>
                </IonCardHeader>
                <IonCardContent className="flex flex-col place-content-between w-2/3">
                    <IonCardTitle color="light">
                        {name}
                    </IonCardTitle>
                    <div id="driverStats" className='flex flex-row justify-between' style={{ justifyContent: 'space-around' }}>
                        <div className="flex flex-col routes">
                            <IonCardTitle color="light">166</IonCardTitle>
                            <IonCardSubtitle>Rutas</IonCardSubtitle>
                        </div>
                        <div className='flex flex-col online'>
                            <IonToggle color="secondary" onIonChange={() => setOnline(!online)} />
                            <IonCardSubtitle color="primary">
                                { online ? 'En Linea' : 'Fuera de Linea' }
                            </IonCardSubtitle>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
    )
}