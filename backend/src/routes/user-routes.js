const express = require("express")
const multer = require("multer")
const { doAuthMiddleware } = require("../auth/doAuthMiddleware")
const { UserService } = require("../use-cases")
const { imageBufferToBase64 } = require("../utils/hash")

const pictureUploadMiddleware = multer().single("avatar")
const userRouter = express.Router()


userRouter.get("/allUsers", async (_, res) => {
    try {
        const allUsers = await UserService.listAllUsers()
        res.status(200).json(allUsers)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: { message: error ? error.message : "Unknown error while loading all users." } })
    }
})
userRouter.post("/register", async (req, res) => {
    try {
        const userInfo = req.body
        console.log(userInfo);
        const user = await UserService.registerUser(userInfo)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: error.message || "Unknown error while registering new user." })

    }
}
)
userRouter.post("/login", async (req, res) => {
    console.log("login in user-routes");
    try {
        const result = await UserService.loginUser({
            email: req.body.email,
            password: req.body.password
        })

        if (result.refreshToken) {
            req.session.refreshToken = result.refreshToken
        }
        console.log("result", result);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while logging in." } })
    }
})
userRouter.get("/profile/:userid",
    doAuthMiddleware,
    async( req, res ) => {
        try {
            const userId = req.params.userid
            const userWallet = await UserService.showWallet({ userId })
        } catch (err) {
            res.status(500).json({ err: {message: err ? err.message: "User not found..."}})
        }
    }
)
// i just copied that muss weiter bearbeitet
userRouter.post("/refreshtoken", async (req, res) => {
    console.log("refresh token is called");
    try {
        const result = await UserService.refreshUserToken({
            refreshToken: req.session.refreshToken || req.body.refreshToken
        })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ err: { message: err ? err.message : "Unknown error while refreshing your token." } })
    }
}
)
module.exports = {
    userRouter
}
// this works --> it generates an access token
// userRouter.post("/login", async (req, res) => {
//     console.log("login in user-routes");
//     try {
//         const email = req.body.email
//         const password = req.body.password
//         console.log("email", email);
//         console.log("password", password);
//         const token = await UserService.loginUser({ email, password })
//         res.json({ token })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ err: { message: err ? err.message : "Unknown error while logging in." } })
//     }
// })