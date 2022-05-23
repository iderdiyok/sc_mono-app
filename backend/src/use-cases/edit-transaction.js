const { TransactionsDAO } = require("../db-access");


async function editTransaction({ _id, ...updateInfo }) {
    console.log("edit transaction use-case has been called");
    console.log("id edit transaction", _id);
    console.log("update edit transaction", updateInfo);
    const updatedTransaction = await TransactionsDAO.updateTransaction(_id, updateInfo)
    return updatedTransaction

}
module.exports = {
    editTransaction
}