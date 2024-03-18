export interface IResponse {
  type: CommonType
  result: CommonType
}

// export type Text = Promise<IResponse[]>

type CommonType = string | null | undefined