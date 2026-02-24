import React, { useState } from "react";

const Formu_publicacion = () => {

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

    const Subir_plato = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(form).forEach((key) => {
            formData.append(key, form[key]);
        });

        formData.append("archivo", archivo);

        const res = await fetch('http://localhost:3001/publicacion/subir', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        });

        const data = await res.json();

        console.log(data)

        if(res.ok){
            alert('Plato subido')
        }
        else{
            alert('No se pudo subir el plato')
        }
    }

    return(
        <form onSubmit={Subir_plato}>
            <input type="text" name="titulo" id="" placeholder="Titulo" value={form.titulo} onChange={handle_change}/>
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

export default Formu_publicacion;