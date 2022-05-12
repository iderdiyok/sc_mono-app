const { ObjectId } = require("mongodb")
const { getDB } = require("./getDB")

async function findTransactionById(transactionId) {
    const db = await getDB()
    const foundTransaction = await db.collection("transactions").findOne( { _id: new ObjectId(transactionId) } )
    return foundTransaction
}

async function insertTransaction(transaction){
    const db = await getDB()
    const insertionResult = await db.collection("transactions").insertOne(transaction)
    return insertionResult
}

module.exports = {
    insertTransaction,
    findTransactionById
}