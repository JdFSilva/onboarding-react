import http from './common'
import { APITypes } from '.'

const searchShows = async (
  searchString: string
): Promise<APITypes.MovieDatabaseApiResponse> => {
  const endpoint = `/search/tv?query=${searchString}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const showDetails = async (tv_id: number) => {
  const endpoint = `/tv/${tv_id}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const showCredits = async (tv_id: number, season_number: number) => {
  const endpoint = `/tv/${tv_id}/season${season_number}/aggregate_credits`
  const resp = await http(endpoint, 'GET')

  return resp
}

export default { searchShows, showDetails, showCredits }
