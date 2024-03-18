import { Request, Response } from "express"
import { styleText, transformText } from "../controllers/main"

export async function text(req: Request, res: Response) {
  console.info(showInfo(req))

  const { q } = req.query

  if (!q) return res.status(400).json({ error: "No query" })

  try {
    const result = await styleText(q as string)

    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

export async function transform(req: Request, res: Response) {
  console.info(showInfo(req))

  const { q } = req.query

  if (!q) return res.status(400).json({ error: "No query" })

  try {
    const result = await transformText(q as string)

    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

export async function pageNotFound(req: Request, res: Response) {
  return res.status(404).json({ error: "Page not found" })
}

export async function showEndpoints(req: Request, res: Response) {
  console.info(showInfo(req))

  return res.status(200).json({
    endpoints: ["/text", "/transform"],
    params: ["?q="],
  })
}

function showInfo(req: Request) {
  return {
    headers: req.headers,
    host: req.hostname,
    ip: req.ip,
    method: req.method,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    q: req.query.q,
    url: req.url,
  }
}
