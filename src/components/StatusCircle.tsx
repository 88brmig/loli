import './styles/StatusCircle.css'

export const StatusCircle = () => {
    return (
        <div className="flex h-full">
            <div id="circle" className="mx-auto w-11/12 h-full text-center border-8 border-gray-500">
                <p className="font-bold">Asignación de <br />Servicio </p>
                <span className="font-semibold">NO DISPONIBLE</span>
            </div>
        </div>
    )
}