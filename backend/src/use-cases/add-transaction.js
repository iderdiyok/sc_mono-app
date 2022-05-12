const { TransactionsDAO } = require("../db-access")
const { makeTransaction } = require("../domain/Transaction")

async function addTransaction({ name, income, amount}) {
    const newTransaction = makeTransaction({ name,income,amount})
    console.log(newTransaction);
    const insertResult = await TransactionsDAO.insertTransaction(newTransaction)
    console.log(insertResult);
    const wasSuccess = insertResult.acknowledged === true && insertResult.insertedId

    if(!wasSuccess){
        throw new Error("Adding a new transaction failed, try again")
    }

    const foundTransaction = TransactionsDAO.findTransactionById(insertResult.insertedId)
    console.log(foundTransaction);
    return foundTransaction
}

module.exports = { addTransaction }