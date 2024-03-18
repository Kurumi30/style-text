import express from "express"
import cors from "cors"
import routes from "./routes/routes"

const app = express()

app.set("json spaces", 2)

app.use(cors({ methods: "GET" }))
app.use(express.json())
app.use(routes)

export default app
