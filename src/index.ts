import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const PORT = process.env.PORT || 3001;

const app = express();

const graphQLServer = new ApolloServer({ typeDefs, resolvers });

graphQLServer.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(
    `Running on Port ${PORT}. GraphQL server is running on http://localhost:${PORT}${graphQLServer.graphqlPath}`
  )
);
