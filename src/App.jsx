import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio_Sesion from "./paginas/Inicio_Sesion";
import Registro from "./paginas/Registro";
import Perfil from "./paginas/Perfil";
import Editar_Perfil from "./paginas/Editar_Perfil";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio_Sesion/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
        <Route path="/Editar_Perfil" element={<Editar_Perfil/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;