import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.send({ message: "success" })
})

router.post("/", (req, res) => {
    res.send({ message: "Successfully Added" })
})

router.put("/", (req, res) => {
    res.send({ message: "Successfully updated" })
})

router.delete("/", (req, res) => {
    res.send({ message: "Successfully delete" })
})

export default router