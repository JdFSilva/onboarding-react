import http from './common'

const searchMovies = async (searchString: string) => {
  const endpoint = `/search/movie?query=${searchString}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const movieDetails = async (movie_id: number) => {
  const endpoint = `/movie/${movie_id}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const movieCredits = async (movie_id: number) => {
  const endpoint = `/movie/${movie_id}/credits`
  const resp = await http(endpoint, 'GET')

  return resp
}

const popularMovies = async () => {
  const endpoint = '/movie/popular'
  const resp = await http(endpoint, 'GET')

  return resp
}

export default { searchMovies, movieDetails, movieCredits, popularMovies }
