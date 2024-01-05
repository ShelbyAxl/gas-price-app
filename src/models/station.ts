import { model, models, Schema } from "mongoose";

const stationSchema = new Schema({
    stationName: {
        type: String,
        unique: true,
        required: [true, "El nombre de la estacíon es requerido"],
        minLength: [3, "Fullname must be at least 3 characters"],
        maxLength: [50, "Fullname must be at most 50 characters"],
    },

    ownerId: {
        type: String,
        required: [true, "El Id del dueño es requerido"],
    },

    address: {
        type: String,
        unique: true,
        required: [true, "La direccion de la estación es requerido"],
    },

    phoneNumber: {
        type: String,
        unique: true,
        required: [true, "El numero telefonico es requerido"],
        
    },

    gasPriceGreen: {
        type: Number,
        match: /^\d+(\.\d{1,2})?$/,
    },

    gasPriceRed: {
        type: Number,
        match: /^\d+(\.\d{1,2})?$/,
    },
})

const Station = models.Station || model("Station", stationSchema); 

export default Station;