const express = require ('express')
const conectarDB = require('./config/db')
const cors = require('cors')

const app = express()

conectarDB()
app.use(cors())

app.use(express.json())

app.use('/api/equipos', require('./routes/equipo'))

app.get('/',(req, res) =>{
    res.send("Hola mundo")
})

app.listen(4000, () =>{
    console.log("Servidor corriendo en el puerto 4000")
})