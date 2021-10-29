import './styles/StatusCircle.css'

enum Status {
    UNAVAILABLE = "UNAVAILABLE", ASIGNED = "ASIGNED", PENDING = "PENDING"
}

interface Props {
    status: Status 
}

export const StatusCircle = ({ status }: Props) => {

    return (
        <div id="circle" className={`mx-auto w-11/12 h-1/2 text-center border-8 border-${status}-500`}>
            <p className="font-bold">Asignación de <br />Servicio </p>
            <span className="font-semibold">{ Status.ASIGNED }</span>
        </div>
    )
}