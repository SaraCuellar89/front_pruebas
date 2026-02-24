import React, { useState } from "react";
import Encabezado_Perfil from "../componentes/Encabezado_Perfil";
import Formu_publicacion from "../componentes/Formu_publicacion";
import Formu_editar_publicacion from "../componentes/Formu_editar_publicacion";

const Perfil = () => {

    const [info_publicacion, setInfo_publicacion] = useState([]);
    const [id_publicacion, setId_publicacion] = useState("");

    const obtener_info_publicacion = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3001/publicacion/una/${id_publicacion}`)

        const datos = await res.json()

        setInfo_publicacion(datos.data.publicacion)
    }

    return(
        <div>
            <Encabezado_Perfil/>

            <h3>Subir Publicacion</h3>

            <Formu_publicacion/>

            <h3>Editar Publicacion</h3>

            <form onSubmit={obtener_info_publicacion}>
                <input type="text" name="id_publicacion" id="id_publicacion" placeholder="Id de la publicacion" value={id_publicacion} onChange={(e) => setId_publicacion(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>

            <Formu_editar_publicacion
                info_publicacion={info_publicacion}
            />

        </div>
    )
}

export default Perfil;