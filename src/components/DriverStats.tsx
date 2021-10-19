import { IonAvatar } from "@ionic/react"

type props = {
    photo?: string,
    name: string,
}

const DriverStats = ({ photo, name}: props) => {
    return (
        <div className="flex p-4 w-full h-48 bg-white">
            <div className="p-2 w-1/3">
                <IonAvatar>
                    <img className="w-36 h-36 rounded-full" src={ photo } alt="" />
                </IonAvatar>
            </div>
            <div></div>
        </div>
    )
}

export default DriverStats
