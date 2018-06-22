import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js'
import mongoose from 'mongoose'
const server = express();

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));
mongoose.connect('mongodb://localhost/graphql');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connetion to database was successful')
});

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));


server.listen(4000, () => {
    console.log('Listening on 4000')
})

