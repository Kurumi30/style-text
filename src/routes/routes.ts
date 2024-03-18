import { Router } from "express"
import { pageNotFound, showEndpoints, text, transform } from "../controllers"

const routes = Router()

routes.get("/", showEndpoints)

routes.get("/text", text)

routes.get("/transform", transform)

routes.get("*", pageNotFound)

export default routes