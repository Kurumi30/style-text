import axios from "axios"
import { load } from "cheerio"
import { IResponse } from "../interfaces/interfaces"

const baseUrl: string = "https://qaz.wtf/u"

export function styleText(text: string): Promise<IResponse[]> {
  return new Promise(async (resolve, reject) => {
    try {
      let response: IResponse[] = []

      const { data } = await axios.get(`${baseUrl}/convert.cgi?text=${text}`)
      const $ = load(data)

      $("table > tbody > tr").each((i, el) => {
        const type = $(el).find("td:nth-child(1) > span").text()
        const result = $(el).find("td:nth-child(2)").text().trim()

        response.push({ type, result })
      })

      return resolve(response)
    } catch (err) {
      return reject(err)
    }
  })
}

export function transformText(text: string): Promise<IResponse[]> {
  return new Promise(async (resolve, reject) => {
    try {
      let response: IResponse[] = []

      const { data } = await axios.get(`${baseUrl}/combining.cgi?use=${text}&count=0&type=both`)
      const $ = load(data)

      $("table > tbody > tr").each((i, el) => {
        const type = $(el).find("td:nth-child(1) > span").text()
        const result = $(el).find("td:nth-child(2)").text().trim()

        response.push({ type, result })
      })

      return resolve(response)
    } catch (err) {
      return reject(err)
    }
  })
}
