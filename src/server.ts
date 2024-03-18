import app from "./app"

export const port = process.env.PORT ?? 3333

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))