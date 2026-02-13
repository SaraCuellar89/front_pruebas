import React, { useEffect, useState } from "react";

const Avatares = ({personaje_seleccionado, setPersonaje_seleccionado}) => {

    const [personajes, setPersonajes] = useState([]);
    
    useEffect(() => {
        const Obtener_Personajes = async () => {
            const api = await fetch('https://rickandmortyapi.com/api/character');

            const datos = await api.json();

            let cuatro_personajes = datos.results.slice(0, 4);
            setPersonajes(cuatro_personajes);
        }

        Obtener_Personajes()
    }, [])

    const seleccionar_personaje = (url_image) => {
        return setPersonaje_seleccionado(url_image);
    }

    return(
        <div>
            {personajes.map((p => (
                <img key={p.id} src={p.image} alt={p.name} width={100} onClick={() => seleccionar_personaje(p.image)}/>
            )))}
        </div>
    )
}

export default Avatares;