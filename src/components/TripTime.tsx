import { alertCircle } from 'ionicons/icons';
import { IonCard, IonCardContent, IonCardTitle, IonButton, IonIcon } from "@ionic/react"
import "./styles/TripTime.css"

export const TripTime = () => {

    const isEmpty = true;

    return (
        false ? (
            <IonCard id="tripTime" className="h-3 bg-white" >
                <IonCardContent>
                    <IonCardTitle className="p-3 text-center">
                    </IonCardTitle>
                </IonCardContent>
            </IonCard >
        ) : (<IonButton id="dynamicBtn" >{isEmpty ? "+ Cambiar" : [<IonIcon icon={alertCircle}/>, "Reportar Emergencia"]  } </IonButton>)
    )
}
