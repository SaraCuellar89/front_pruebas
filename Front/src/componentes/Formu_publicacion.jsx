import React from "react";

const Formu_publicacion = () => {
    return(
        <form>
            <input type="text" name="titulo" id="" placeholder="Titulo"/>
            <input type="file" name="imagen" id="" placeholder="Imagen"/>
            <input type="text" name="descripcion" id="" placeholder="Descripcion"/>
            <input type="text" name="ingredientes" id="" placeholder="Ingredientes"/>
            <input type="number" name="tiempo" id="" placeholder="Tiempo de preparacion"/>
            <input type="text" name="dificultad" id="" placeholder="Dificultad"/>

            <button type="button">Subir</button>
        </form>
    )
}

export default Formu_publicacion;