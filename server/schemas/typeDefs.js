const gql = require('graphql-tag');

const typeDefs = gql`
type Skill{
    id: ID!
    title: String!
    username: String!
    currentHour: Int!
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}

type User{
    _id: ID!
    username: String!
    password: String
    email: String!
    userSkills: [Skill]
}

input UserInput {
    username: String!
    password: String!
}

type RootMutation {
    createUser(userInput: UserInput): User
}

type Query{
    getSkills: [Skill]
}
`;

module.exports = typeDefs;