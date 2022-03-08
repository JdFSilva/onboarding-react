import http from './common'
import { APITypes } from '.'

const searchShows = async (
  searchString: string
): Promise<APITypes.IMovieDatabaseApiResponse> => {
  const endpoint = `/search/tv?query=${searchString}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const showDetails = async (tv_id: string) => {
  const endpoint = `/tv/${tv_id}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const showCredits = async (tv_id: string, season_number: string) => {
  const endpoint = `/tv/${tv_id}/season${season_number}/aggregate_credits`
  const resp = await http(endpoint, 'GET')

  return resp
}

export default { searchShows, showDetails, showCredits }
