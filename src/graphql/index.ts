import { gql } from "apollo-server-express";
import { paymentMethods, users } from "../data";
import { PaymentMethod, User, UserArgsType } from "../utils/types";

export const typeDefs = gql`
  type Query {
    getHello: String
    getUser: User
    getUserById(id: ID!): User
  }
  type Mutation {
    createUser(id: ID!, name: String!, email: String!, age: Int!): User
    createPaymentMethod(
      id: ID!
      last4: String
      expMonth: Int
      expYear: Int
      userId: ID!
    ): PaymentMethod
  }
  type User {
    id: ID!
    name: String
    email: String
    age: Int
    paymentMethod: [PaymentMethod]
  }
  type PaymentMethod {
    id: ID!
    last4: String
    expMonth: Int
    expYear: Int
    userId: String
  }
`;

export const resolvers = {
  Query: {
    getHello: () => "Hello, World!",
    getUser: () => ({
      id: "123",
      name: "Arizona",
      email: "arizona@gmail.com",
      age: 23,
    }),
    getUserById: (parent: any, args: UserArgsType) => {
      const { id } = args;
      // Query For Data
      return users.find((user: User) => user.id === id);
    },
  },
  Mutation: {
    createUser: (parent: any, args: UserArgsType) => {
      const { id, name, email, age } = args;
      const newUser: User = { id, name, email, age };
      users.push(newUser);
      return newUser;
    },
    createPaymentMethod: (parent: any, args: PaymentMethod) => {
      paymentMethods.push(args);
      return args;
    },
  },
  User: {
    paymentMethod: (parent: User) => {
      return paymentMethods.filter((payment) => payment.userId === parent.id);
    },
  },
};
