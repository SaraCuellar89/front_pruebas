const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");


// ================== Middlewares ==================
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Varibles de entorno
dotenv.config();

app.use(passport.initialize());


// ================== Importacion de Rutas ==================
const rutas_usuario = require("./src/routes/usuarios_routes");


// ================== Rutas ==================
// Test
app.get('/', (req, res) => {
    res.send("<h1>Hola desde el Backend</h1>")
})

// Usuarios
app.use('/usuarios', rutas_usuario);



// ================== Escucha del puerto (numero de puerto en .evn) ================== 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});