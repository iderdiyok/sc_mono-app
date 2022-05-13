//UserService
const { listAllUsers } = require("./listAllUsers")
const { loginUser } = require("./login-user")
const { refreshUserToken } = require("./refresh-token")
const { registerUser } = require("./register-user")

//TransactionService
const { addTransaction } = require("./add-transaction")
const { showTransaction } = require("./show-transaction")



const UserService = {
    listAllUsers,
    registerUser,
    loginUser,
    refreshUserToken
}

const TransactionService = {
    addTransaction,
    showTransaction
}
module.exports = { UserService, TransactionService }