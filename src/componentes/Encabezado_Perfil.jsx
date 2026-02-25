import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Encabezado_Perfil = () => {

    const navigate = useNavigate();

    const [nombre_usuario, SetNombre_usuario] = useState("");
    const [avatar, SetAvatar] = useState("");

    useEffect(() => {
        const Obtener_datos_usuario = () => {
            // Obtener usuario y convertir el string en json
            const usuarioString = localStorage.getItem("usuario");
            const usuario = JSON.parse(usuarioString);
            SetNombre_usuario(usuario.nombre);   
            SetAvatar(usuario.avatar);   
        }

        Obtener_datos_usuario();
    }, [])

    const Cerrar_Sesion = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        navigate('/');
    };

    return(
        <div>
            <h1>Perfil de {nombre_usuario}</h1>

            <img src={avatar} alt="avatar" />

            <button type="button" onClick={Cerrar_Sesion}>Cerrar Sesion</button>

            <Link to={'/Editar_Perfil'}>Editar Perfil</Link>
        </div>
    )
}

export default Encabezado_Perfil;