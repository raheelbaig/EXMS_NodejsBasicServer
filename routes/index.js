import ads from "./ads.js"
import express from "express"
const router = express.Router()

router.use("/ads", ads)

export default router