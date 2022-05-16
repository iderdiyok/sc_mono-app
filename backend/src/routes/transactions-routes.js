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
            res.status(500).json({ err: { message: err ? err.message : "Unknown error while adding a new transaction" } })
        }
    }

)
//mit auth ?
transactionsRouter.get("/:transactionId", doAuthMiddleware, async (req, res) => {
    try {
        const transactionId = req.params.transactionId
        const result = await TransactionService.showTransaction({ transactionId })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: { message: error ? error.message : "Unknown error while loading post." } })
    }
})

// edit transaction route 
transactionsRouter.put("/edit", doAuthMiddleware, async (req, res) => {
    try {
        const transactioUpdateInfo = req.body
        const updatedTransaction = await TransactionService.editTransaction(transactioUpdateInfo)
        res.json(updatedTransaction)
    } catch (error) {
        console.log(error);
        res.status(500).json("Unknown error while editing a Transaction.")
    }
})

module.exports = { transactionsRouter }