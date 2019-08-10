import dotenv from 'dotenv';
import path from 'path'
import fs from 'fs'

let envPath = "";

for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === "-env") {
        envPath = path.resolve(process.cwd(), process.argv[i + 1])
    }
}
if (!envPath) {
    console.error('-env should be a path for config file');
    process.exit(0);
}

if (!fs.existsSync(envPath)) {
    console.error('-env file not exist at path ' + envPath);
    process.exit(0);
}

dotenv.config({
    path: envPath,
    debug: process.env.ENV === "debug"
});


import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import * as GraphQL from 'graphql'
import { ApolloServer } from 'apollo-server-express'
import { Prisma } from 'prisma-binding'
import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import resolvers from './graphql/resolvers'

const app = express()
const port = process.env.PORT || 4000
const typeDefs = importSchema(path.join(__dirname, "graphql", "schema.graphql"))
const prismaTypeDefs = importSchema(path.join(__dirname, "generated", "prisma.graphql"))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());

const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: prismaTypeDefs,
            endpoint: 'http://localhost:4466', // the endpoint of the Prisma DB service (value is set in .env)
            secret: '', // taken from database/prisma.yml (value is set in .env)
            debug: true, // log all GraphQL queries & mutations
        }),
    }),

    /**
     * GraphQL error handling converts new Error(code) 
     * to errorDefinitions object
     * ignore formatted gql, we use standart Error
     */
    formatError: (error) => {
        if (error.message && error.message.match("{")) {
            try { return JSON.parse(error.message) } catch (error) { }
        }
        return error
    },

    /**
     * Turns on Graphql playground 
     * if instance is not production
     */
    playground: process.env.PLAYGROUND == 'true',
})

/**
 * Setting headers
 */
app.use((req, res, next) => {
    res.header("x-powered-by", "SMORODINA")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST")
    res.header("Access-Control-Allow-Headers", "Content-Type")

    next()
})

/**
 * Http limits
 */
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))


apolloServer.applyMiddleware({
    app,
    path: "/graphql"
})


app.listen({ port }, () => {
    console.log(`\x1b[36mEBIRD READY AT ${port}\x1b[0m 🐥🐣🐥`)

    app.get('*', (req, res) => {
        res.type('text')
        res.send("You should't to that 🔪")
    })
})
