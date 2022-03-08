export interface IMovieDatabaseApiResponse {
  page: number
  results:
    | IMovieObjectResponse[]
    | IShowObjectResponse[]
    | IPeopleObjectResponse[]
  totalPages: number
  totalResults: number
}

export interface IMovieObjectResponse {
  id: number
  title: string
  overview: string
}

export interface IShowObjectResponse {
  id: number
  name: string
  overview: string
}

export interface IPeopleObjectResponse {
  id: number
  name: string
}
