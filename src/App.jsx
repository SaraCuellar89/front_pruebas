import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio_Sesion from "./paginas/Inicio_Sesion";
import Registro from "./paginas/Registro";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio_Sesion/>}/>
        <Route path="/Registro" element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;