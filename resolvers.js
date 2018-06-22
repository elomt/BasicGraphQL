import mongoose from 'mongoose'
import authorModel from './models/author.js'

const authors = [{
    name: 'Elom Tsiagbey',
    id: 32,
    age: 35,
    books: ['Return of Elom', 'Harry Potter', 'Everyone Loves Drake']
},
{
    name: 'JK Rowling',
    id: 21,
    age: 55,
    books: ['Game of Thrones', 'Harry Potter', 'Everyone Loves Drake']
},
{
    name: 'Datewn Chappelle',
    id: 23,
    age: 37,
    books: ['Return of EDawenlom', 'Wonder Potter', 'Nice for What']
},
]
 

const resolvers = {
    Query: {
        authors: (root, {age}) => {
            return authorModel.find({age: age})
        },
        author:(root, {id}) => {
            return authorModel.findOne({id: id})
        }
    },

    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({age:age, name:name, books:books});
            return author.save();
        },
        deleteAuthor:(root, {id}) => {
            return authorModel.remove({id: id })
        },
        updateAuthor:(root, {id, name}) => {
            return authorModel.findOneAndUpdate({id: id}, {name: name})
        }
    }
}

export default resolvers;