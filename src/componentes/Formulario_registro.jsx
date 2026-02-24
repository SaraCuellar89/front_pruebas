import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatares from "./Avatares";

const Formulario_registro = () => {

    const [ver, setVer] = useState(false);

    const cambiarAvatar = () => {
        setVer(!ver);
    };

    const [personaje_seleccionado, setPersonaje_seleccionado] = useState('');

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

            <img src={personaje_seleccionado} alt="" width={100}/>

            <input type="password" placeholder="Contraseña"/>

            <button type="submit">Registrarse</button>
            <button type="button">Registrarse con google</button>
            
            <Link to={'/'}>Iniciar Sesion</Link>

            {ver === false ? (
                null
            ) : (
                <Avatares 
                    personaje_seleccionado={personaje_seleccionado}
                    setPersonaje_seleccionado={setPersonaje_seleccionado}
                />
            )}
        </form>
    )
}

export default Formulario_registro;