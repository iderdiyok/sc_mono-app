const { listAllUsers } = require("./listAllUsers")
const { loginUser } = require("./login-user")
const { refreshUserToken } = require("./refresh-token")
const { registerUser } = require("./register-user")




const UserService = {
    listAllUsers,
    registerUser,
    loginUser,
    refreshUserToken
}

module.exports = { UserService }