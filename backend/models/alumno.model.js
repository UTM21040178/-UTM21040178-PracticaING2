
import{Schema, model} from "mongoose"

const EsquemaAlumnos = new Schema({

    name:{
        type: String
    }, 
    apepat:{
        type: String
    }
})

export const ModeloAlumnos = new model("tabla de registro de alumnos", EsquemaAlumnos)