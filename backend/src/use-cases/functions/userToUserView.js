

function userToUserView(user) {
    return {
        _id: user._id,
        userName: user.userName,
        email: user.email,
        avatar: user.avatar
    }
}
module.exports = {
    userToUserView
}