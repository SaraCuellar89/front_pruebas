import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Formulario_inicio_sesion = () => {

    const handleSuccess = async (credentialResponse) => {

        const token = credentialResponse.credential;

        const respuesta = await fetch("http://localhost:3001/usuarios/iniciar_sesion_google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        });

        const data = await respuesta.json();

        if (respuesta.ok) {
            localStorage.setItem("token", data.data.token);
            window.location.href = "/Perfil";
        } else {
            alert(data.message);
        }
    };

    return (
        <form>
            <input type="email" placeholder="Correo"/>
            <input type="password" placeholder="Contraseña"/>

            <button type="submit">Entrar</button>

            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => console.log("Login Failed")}
            />

            <Link to={'/Registro'}>Crear Cuenta</Link>
        </form>
    );
};

export default Formulario_inicio_sesion;