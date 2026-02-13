import React from "react";
import { Link } from "react-router-dom";

const Encabezado_Perfil = () => {
    return(
        <div>
            <h1>Perfil de Usuario</h1>

            <Link to={'/Editar_Perfil'}>Editar Perfil</Link>
        </div>
    )
}

export default Encabezado_Perfil;