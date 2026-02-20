import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Formulario_inicio_sesion = () => {

    const navigate = useNavigate();

    // Estados para inciar sesion
    const [form, setForm] = useState({
        correo: "",
        contrasena: "",
    })

    const handle_change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const Obtener_info_usuario = async () =>{
        const token = localStorage.getItem("token");

        const res = await fetch('http://localhost:3001/usuarios/usuario_logueado', {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const data = await res.json();

        if(res.ok){
            return localStorage.setItem("usuario", JSON.stringify(data.usuario));
        }
        else{
            return console.log('No se pudo obtener la informacion usuario')
        }
    }

    //  ========================= Funcion para Iniciar Sesion con google =========================
    const iniciar_sesion_google = async (credentialResponse) => {

        const token = credentialResponse.credential;

        const res = await fetch("http://localhost:3001/usuarios/iniciar_sesion_google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.data.token);
            Obtener_info_usuario();
            
            alert(`¡Hola ${data.data.nombre}!`);
            navigate("/Perfil");
        } else{
            alert(data.message);
        }
    };



    //  ========================= Funcion para Iniciar Sesion con constraseña =========================
    const iniciar_sesion = async (e) => {
        e.preventDefault();

        localStorage.removeItem("token");

        const res = await fetch("http://localhost:3001/usuarios/iniciar_sesion", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if(res.ok){
            localStorage.setItem("token", data.data.token);
            Obtener_info_usuario();

            alert(`¡Hola ${data.data.nombre}!`);
            navigate("/Perfil");
        }
        else{
            alert(data.message);
        }
    }


    return (
        <form onSubmit={iniciar_sesion}>
            <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handle_change}/>
            <input type="password" name="contrasena" placeholder="Contraseña" value={form.contrasena} onChange={handle_change}/>

            <button type="submit">Entrar</button>

            <GoogleLogin
                onSuccess={iniciar_sesion_google}
                onError={() => alert("No se pudo Iniciar sesion con tu cuenta")}
            />

            <Link to={'/Registro'}>Crear Cuenta</Link>
        </form>
    );
};

export default Formulario_inicio_sesion;