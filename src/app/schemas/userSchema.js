const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID
    fullname:String,
    phone:String,
    age:String,
  }

  input UserInput {
    fullname:String,
    phone:String,
    age:String,
  }
  input UserWhereInputOne {
    id: ID!
  }

  input UserWhereInput {
    fullname:String,
    phone:String,
    age:String,
    OR: [UserWhereInput]
  }
  type ResponseUserData {
    total: Int
    data: [User]
  }

  type Query {
    getUsersList(where: UserWhereInput, orderBy: OrderByInput): ResponseUserData!
    getUser(where: UserWhereInputOne!): User
  }

  type Mutation {
    updateUser(data: UserInput!, where: UserWhereInputOne!): User
    addUser(data: UserInput!): User
    deleteUser(where: UserWhereInputOne!): User
  }
`;
