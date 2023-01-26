const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt:String,
    userSkills: {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }
});

module.exports = model('User', userSchema)