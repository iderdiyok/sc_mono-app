const { TransactionsDAO } = require("../db-access");


async function editTransaction({ _id, ...updateInfo }) {
    console.log("edit transaction use-case has been called");
    const updatedTransaction = await TransactionsDAO.updateTransaction(_id, updateInfo)
    return updatedTransaction

}
module.exports = {
    editTransaction
}