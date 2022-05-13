const { TransactionsDAO } = require("../db-access");

async function showTransaction({ transactionId }) {
    const foundTransaction = await TransactionsDAO.findTransactionById(transactionId)
    console.log("foundTransaction for showTransaction", foundTransaction);
    if (!foundTransaction) {
        throw new Error("Transaction with provided id not found...")
    }
    return {
        foundTransaction
    }
}
module.exports = { showTransaction }