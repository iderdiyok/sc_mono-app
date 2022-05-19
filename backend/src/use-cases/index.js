//UserService
const { listAllUsers } = require("./listAllUsers")
const { loginUser } = require("./login-user")
const { refreshUserToken } = require("./refresh-token")
const { registerUser } = require("./register-user")
const { showWallet } = require("./show-wallet")
const { ShowTransactionsInPeriod } = require("./show-transactions-in-period")
const { showProfileInfo } = require("./show-user")

//TransactionService
const { addTransaction } = require("./add-transaction")
const { showTransaction } = require("./show-transaction")
const { editTransaction } = require("./edit-transaction")



const UserService = {
    listAllUsers,
    registerUser,
    loginUser,
    refreshUserToken,
    showWallet,
    ShowTransactionsInPeriod,
    showProfileInfo
}

const TransactionService = {
    addTransaction,
    showTransaction,
    editTransaction
}
module.exports = { UserService, TransactionService }