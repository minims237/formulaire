const { ApolloServer }=require("apollo-server-express")
const {typeDefs}=require("./schema.graphql")
const resolvers = require("./resolvers/index");
const { PrismaClient } = require("@prisma/client");
const { makeExecutableSchema } = require("graphql-tools")
const { graphqlUploadExpress } = require('graphql-upload');
const { storeUpload } = require('./resolvers/helpers/upload')
const  {
  ApolloServerPluginLandingPageGraphQLPlayground,ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageProductionDefault
} =require("apollo-server-core");
const cors=require('cors')
const express=require("express")
const app=express()
const prisma=new PrismaClient()
const schema = new makeExecutableSchema({
  typeDefs,
  resolvers,
  
});
const server = new ApolloServer({
  uploads: false,
    schema,
    context: (request) => ({ ...request, prisma, storeUpload }),
    playground: true,
    introspection: true
  });
app.use(graphqlUploadExpress())
app.use('/uploads',cors({
  origin: true,
  credentials: true,
}),express.static("uploads"))
server.applyMiddleware({app})
app.listen(process.env.PORT|| 4000,()=> console.log("server is listening"))

