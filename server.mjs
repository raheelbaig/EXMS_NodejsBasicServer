import express from "express"
import routes from "./routes/index.js"
const app = express()

app.listen(3000, function( ) {
    console.log("server is running")
})

app.use("/", routes)

app.use(express.json());
app.use(express.urlencoded({extended: true}))