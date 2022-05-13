const express = require("express")
const multer = require("multer")

const { TransactionService } = require("../use-cases")
// const { imageBufferToBase64 } = require("../utils/hash")
const { doAuthMiddleware } = require("../auth/doAuthMiddleware")

const transactionsRouter = express.Router()
// const pictureUploadMiddleware = multer().single("picture")

transactionsRouter.post("/add",
    // pictureUploadMiddleware,
    doAuthMiddleware,
    async (req, res) => {
        try {
            // const pictureBase64 = imageBufferToBase64(req.file.buffer, req.file.mimetype)
            const result = await TransactionService.addTransaction({
                name: req.body.name,
                income: req.body.income,
                amount: req.body.amount,
                userId: req.userClaims.sub
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while adding a new transaction"} })
        }
    }

)


module.exports = { transactionsRouter }