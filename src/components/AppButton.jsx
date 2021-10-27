import { IonButton } from "@ionic/react"
import "./styles/AppButton.css"

export const AppButton = () => {
    return (
        <div id="appButton" className="px-4 my-10 mt-24 rounded-full">
            <IonButton shape="round" className="w-full text-center bg-red-500 rounded-full">
                Reportar Incidente
            </IonButton>
        </div>
    )
}