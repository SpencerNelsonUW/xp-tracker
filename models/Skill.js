const { model, Schema } = require('mongoose');

const skillSchema = new Schema({
    title: String,
    username: String,
    currentHour: Number, //represented in hours
    goalHour: Number,    //also represented in hours
    user: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    }
})

module.exports = model('Skill', skillSchema)