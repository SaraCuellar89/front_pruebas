import React, { useEffect } from "react";
import { useState } from "react";

const Formu_editar_publicacion = ({info_publicacion}) => {

    useEffect(() => {
        if (info_publicacion) {
            setForm({
                titulo: info_publicacion.publicacion_titulo || "",
                descripcion: info_publicacion.publicacion_descripcion || "",
                ingredientes: info_publicacion.publicacion_ingredientes || "",
                preparacion: info_publicacion.publicacion_preparacion || "",
                tiempo_preparacion: info_publicacion.publicacion_tiempo_preparacion || "",
                dificultad: info_publicacion.publicacion_dificultad || ""
            });
        }
    }, [info_publicacion]);

    const [form, setForm] = useState({
        titulo: "",
        descripcion: "",
        ingredientes: "",
        preparacion: "",
        tiempo_preparacion: "",
        dificultad: ""
    })

    const [archivo, setArchivo] = useState(null);

    const handle_change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handle_file = (e) => {
        setArchivo(e.target.files[0]);
    };

    const Editar_plato = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(form).forEach((key) => {
            formData.append(key, form[key]);
        });

        if (archivo) {
            formData.append("archivo", archivo);
        }

        const res = await fetch(`http://localhost:3001/publicacion/editar/${info_publicacion.publicacion_id}`, {
            method: 'PUT',
            body: formData
        });

        const data = await res.json();

        if(res.ok){
            alert('Plato editado')
        }
        else{
            alert('No se pudo editar el plato')
        }
    }

    return(
        <form onSubmit={Editar_plato}>
            <input type="text" name="titulo" id="" placeholder="Titulo" value={form.titulo} onChange={handle_change}/>
            <img src={info_publicacion.publicacion_archivo} alt="" />
            <input type="file" name="archivo" onChange={handle_file} />
            <input type="text" name="descripcion" id="" placeholder="Descripcion" value={form.descripcion} onChange={handle_change}/>
            <input type="text" name="ingredientes" id="" placeholder="Ingredientes" value={form.ingredientes} onChange={handle_change}/>
            <input type="text" name="preparacion" id="" placeholder="Pasos" value={form.preparacion} onChange={handle_change}/>
            <input type="number" name="tiempo_preparacion" id="" placeholder="Tiempo de preparacion" value={form.tiempo_preparacion} onChange={handle_change}/>
            <input type="text" name="dificultad" id="" placeholder="Dificultad" value={form.dificultad} onChange={handle_change}/>

            <button type="submit">Subir</button>
        </form>
    )
}

export default Formu_editar_publicacion;