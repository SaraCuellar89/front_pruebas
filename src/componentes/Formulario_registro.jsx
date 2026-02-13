import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formulario_registro = () => {

    const [ver, setVer] = useState(false);

    const cambiarAvatar = () => {
        setVer(!ver);
    };

    return(
        <form>
            <input type="text" placeholder="Nombre"/>
            <input type="email" placeholder="Correo"/>

            <input type="text" placeholder="Avatar" hidden/>
            
            {ver === false ? (
                <button type="button" onClick={cambiarAvatar}>
                    Escoger Avatar
                </button>
            ) : (
                <button type="button" onClick={cambiarAvatar}>
                    Ocultar Avatar
                </button>
            )}

            <input type="password" placeholder="Contraseña"/>

            <button type="submit">Registrarse</button>
            <button type="button">Registrarse con google</button>
            
            <Link to={'/'}>Iniciar Sesion</Link>
        </form>
    )
}

export default Formulario_registro;