
import express from "express";
import { listingsData } from './listings';
import bodyParser   from 'body-parser';
import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello: {}
      }
  });
  
  const mutation = new GraphQLObjectType({
    name: "Mutation"
  });
export const schema = new GraphQLSchema({
    query,
    mutation
 });
const app = express();
const port = 9000;
const server = new ApolloServer();
server.applyMiddleware({ app, path: "/api" });
app.listen(port);
console.log(`[app] : http://localhost:${port}`);

