import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Encabezado_Perfil = () => {

    const [nombre_usuario, SetNombre_usuario] = useState("")

    useEffect(() => {
        const Obtener_datos_usuario = () => {
            // Obtener usuario y convertir el string en json
            const usuarioString = localStorage.getItem("usuario");
            const usuario = JSON.parse(usuarioString);
            SetNombre_usuario(usuario.nombre);   
        }

        Obtener_datos_usuario();
    }, [])

    return(
        <div>
            <h1>Perfil de {nombre_usuario}</h1>

            <Link to={'/Editar_Perfil'}>Editar Perfil</Link>
        </div>
    )
}

export default Encabezado_Perfil;