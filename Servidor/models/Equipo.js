const mongoose = require('mongoose')

const EquipoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    puntos:{
        type:Number,
        default: 0
    },
    difGol:{
        type:Number,
        default: 0
    },
    golesFavor:{
        type:Number,
        default: 0
    },
    golesContra:{
        type:Number,
        default: 0
    }
});

module.exports=mongoose.model('Equipo', EquipoSchema)