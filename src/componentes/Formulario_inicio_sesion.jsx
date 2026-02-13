import React from "react";
import { Link } from "react-router-dom";

const Formulario_inicio_sesion = () => {
    return(
        <form>
            <input type="email" placeholder="Correo"/>
            <input type="password" placeholder="Contraseña"/>

            <button type="submit">Entrar</button>   
            <button type="button">Entrar con google</button>
            
            <Link to={'/Registro'}>Crear Cuenta</Link>
        </form>
    )
}

export default Formulario_inicio_sesion;