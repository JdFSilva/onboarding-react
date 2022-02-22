export interface MovieDatabaseApiResponse {
  page: number
  results: MovieObjectResponse[] | ShowObjectResponse[] | PeopleObjectResponse[]
  totalPages: number
  totalResults: number
}

export interface MovieObjectResponse {
  id: number
  title: string
  overview: string
}

export interface ShowObjectResponse {
  id: number
  name: string
  overview: string
}

export interface PeopleObjectResponse {
  id: number
  name: string
}
