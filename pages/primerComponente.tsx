import { useContext } from "react"
import AppContext from "./AppContext"


export default function PrimerComponente() {

    const context = useContext(AppContext);
    
    const onUpdateNameContext = () => {
        context.setNameContext('Robert');
    }

    const onUpdateApellidoContext = () => {
        context.setApellidoContext('Lewandowski');
    }


    return (
        <><div className="main">
            <h2>Primer Componente Children</h2>
            <h2>El valor del Name es: {context.nameContext}</h2>
            <h2>El valor del Apellido es: {context.apellidoContext}</h2>
            <style jsx>{`
                .main {
                    background-color: rgba(135,62,35,0.6);
                }
                `}</style>
        </div>
        
        <button onClick={onUpdateNameContext}> Update Nombre</button>
        <button onClick={onUpdateApellidoContext}> Update Apellido</button>
        </>

    )

}