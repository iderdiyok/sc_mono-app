const { createRandomSalt, createPasswordHash } = require("../utils/hash")

function makeUser({
    _id,
    userName,
    email,
    avatar,
    totalBalance,
    passwordHash,
    passwordSalt

}) {

    if (!email) {
        throw new Error("E-Mail must exist.")
    }
    if (!passwordHash && !password) {
        throw new Error("User must provide a password or passwordHash")
    }
    const _pwSalt = passwordSalt || createRandomSalt()

    return {
        userName,
        email,
        avatar: avatar || "https://www.clipartmax.com/png/small/296-2969961_no-image-user-profile-icon.png",
        totalBalance: totalBalance || 0,
        passwordHash: passwordHash || createPasswordHash(password, _pwSalt),
        passwordSalt: _pwSalt,
        _id,
    }
}
module.exports = { makeUser }
//User -> _id, userName, email, passwordHash, passwordSalt, avatar, totalBalance: