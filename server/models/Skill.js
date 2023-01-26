const { model, Schema } = require('mongoose');

const skillSchema = new Schema({
    title: String,
    currentHour: Number, //represented in hours
    goalHour: Number,    //also represented in hours
    creator: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = model('Skill', skillSchema)