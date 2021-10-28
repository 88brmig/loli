import './styles/StatusCircle.css'

enum Status {
    UNAVAILABLE,
    ASIGNED,
    PENDING
}

export const StatusCircle = ({status }: Status) => {
    return (
        <div id="circle" className={`mx-auto w-11/12 h-1/2 text-center border-8 border-${ props.UNAVAILABLE}-500`}>
            <p className="font-bold">Asignación de <br />Servicio </p>
            <span className="font-semibold">{"Hello"}</span>
        </div>
    )

}