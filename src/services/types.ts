export interface MovieDatabaseApiResponse {
  page: number
  results: MovieObjectResponse[] | ShowObjectResponse[] | PeopleObjectResponse[]
  totalPages: number
  totalResults: number
}

export interface MovieObjectResponse {
  title: string
  overview: string
}

export interface ShowObjectResponse {
  title: string
  overview: string
}

export interface PeopleObjectResponse {
  title: string
  overview: string
}
