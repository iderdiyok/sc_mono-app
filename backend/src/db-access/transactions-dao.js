const { ObjectId } = require("mongodb")
const { getDB } = require("./getDB")

async function findTransactionById(transactionId) {
    const db = await getDB()
    const foundTransaction = await db.collection("transactions").findOne( { _id: new ObjectId(transactionId) } )
    return foundTransaction
}
async function findAllTransactionsOfUser(userId){
    const db = await getDB()
    const allTransactions = await db.collection("transactions").find({userId: userId}).toArray()
    return allTransactions
}
// async function findAllTransactionsOfUserFromCurrentMonth(userId){
//     const db = await getDB()
//     const allTransactions = await db.collection("transactions").find({userId: userId}).toArray()
//     return allTransactions
// }
async function insertTransaction(transaction){
    const db = await getDB()
    const insertionResult = await db.collection("transactions").insertOne(transaction)
    return insertionResult
}

module.exports = {
    insertTransaction,
    findTransactionById,
    findAllTransactionsOfUser
}