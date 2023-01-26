const User = require('./models/User');
const Skill = require('./models/Skill')
const bcrypt = require('bcryptjs');

const resolvers = {
    Query: {
        async getSkills(){
            try{
                const skills = await Skill.find();
                return skills;
            }   catch (err){
                throw new Error(err);
            }
        }
    },
    createUser: args => {
        return User.findOne({username:args.userInput.username}).then(user=>{
            if(user){
                throw new Error('Username taken.')
            }
            return bcrypt
        .hash(args.userInput.password, 12)
        })
        .then(hashedPassword =>{
            const user = new User({
                username: args.userInput.username,
                password: hashedPassword,
            })
            return user.save();
        })
        .then( result =>{
            return {...result._doc, password: null, _id:result.id }
        })
        .catch(err =>{
            throw err;
        });
        
    }
};


module.exports = resolvers;