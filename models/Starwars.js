const mongoose = require('mongoose')

const {Schema} = mongoose

const StarwarsSchema = new Schema({
    number : {
        type : String,
        required : true,
        unique : true
    },
    height : {
        type : Number,
        required : true
    },
    mass : {
        type : Number,
        required : true
    },
    hair_color : {
        type : String,
        required : true
    },
    skin_color : {
        type : String,
        required : true
    },
    eye_color : {
        type : String,
        required : true
    },
    birth_year : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    homeworld : {
        type : String,
        required : true
    },
    species : {
        type : String,
        required : true
    },
    starwars : {
        type : Schema.Types.ObjectId,
        ref : 'starwars'
    }
})

module.exports = mongoose.model('starwars',StarwarsSchema)