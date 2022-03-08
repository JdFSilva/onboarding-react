export interface IGenre {
  id: number
  name: string
}

export interface IDetailsObject {
  [key: string]: string | number | IGenre[] | string[]
}

export interface IMovieCast {
  id: number
  known_for_department: string
  name: string
  character: string
  profile_path: string
}

export interface IMovieCastByDepartment {
  [department: string]: IMovieCast[]
}

export interface IMovieCrew {
  id: number
  known_for_department: string
  name: string
  job: string
  profile_path: string
}

export interface IMovieCrewByDepartment {
  [department: string]: IMovieCrew[]
}

export interface ICreditsCard {
  cast: IMovieCast[]
  crew: IMovieCrew[]
}

export interface ISeason {
  id: number
  name: string
  episode_count: number
  air_date: string
}

export interface IMovie {
  id: number
  title: string
  overview: string
  poster_path: string
}

export interface IShow {
  id: number
  name: string
  overview: string
  poster_path: string
}

export interface IMovieCredits {
  cast: IMovie[]
  crew: IMovie[]
}

export interface IShowCredits {
  cast: IShow[]
  crew: IShow[]
}
