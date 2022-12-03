const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Skill = require('./models/Skill')
const { MONGODB } = require('./config.js')

const typeDefs = gql`
    type Skill{
        id:ID!
        title:String!
        username:String!
        currentHour:Int!
    }
    type Query{
        getSkills: [Skill]
    }
`;

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
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(MONGODB, {useNewURLParser: true})
.then(() => {
        console.log(`MONGODB Connected`)
    return server.listen({ port: 3001 })
})
.then((res) => {
    console.log(`Server running at ${res.url}`)
})