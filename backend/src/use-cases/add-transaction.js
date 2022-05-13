const { TransactionsDAO } = require("../db-access")
const { makeTransaction } = require("../domain/Transaction")

async function addTransaction({ name, income, amount, userId}) {
    const newTransaction = makeTransaction({ name,income,amount, userId})
    
    const insertResult = await TransactionsDAO.insertTransaction(newTransaction)
    const wasSuccess = insertResult.acknowledged === true && insertResult.insertedId

    if(!wasSuccess){
        throw new Error("Adding a new transaction failed, try again")
    }

    const foundTransaction = TransactionsDAO.findTransactionById(insertResult.insertedId)
    return foundTransaction
}

module.exports = { addTransaction }