const Equipo = require("../models/Equipo")

exports.crearEquipo = async (req, res) =>{
    try {
        let equipo
        equipo=new Equipo(req.body)

        await equipo.save()
        res.send(equipo)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}

exports.obtenerEquipos = async (req,res) => {
    try {
        const equipos = await Equipo.find()
        res.json(equipos)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}

exports.actualizarEquipo = async (req,res) => {
    try {
        const {nombre, puntos, difGol, golesFavor, golesContra} = req.body
        let equipo = await Equipo.findById(req.params.id)
        if(!equipo){
            res.status(404).json({msg:"No existe el equipo"})
        }
        equipo.nombre=nombre
        equipo.puntos=puntos
        equipo.difGol=difGol
        equipo.golesFavor=golesFavor
        equipo.golesContra=golesContra

        equipo = await Equipo.findByIdAndUpdate({_id:req.params.id},equipo, {new:true})
        res.json(equipo)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}

exports.obtenerEquipo = async (req,res) => {
    try {
        let equipo = await Equipo.findById(req.params.id)
        if(!equipo){
            res.status(404).json({msg:"No existe el equipo"})
        }
        res.json(equipo)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}

exports.eliminarEquipo = async (req,res) => {
    try {
        let equipo = await Equipo.findById(req.params.id)
        if(!equipo){
            res.status(404).json({msg:"No existe el equipo"})
        }
        await Equipo.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Equipo eliminado'})
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}