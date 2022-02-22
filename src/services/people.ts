import http from './common'

const searchPeople = async (searchString: string) => {
  const endpoint = `/search/person?query=${searchString}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const personDetails = async (person_id: number) => {
  const endpoint = `/person/${person_id}`
  const resp = await http(endpoint, 'GET')

  return resp
}

const personShowsCredits = async (person_id: number) => {
  const endpoint = `/person/${person_id}/tv_credits`
  const resp = await http(endpoint, 'GET')

  return resp
}

const personMoviesCredits = async (person_id: number) => {
  const endpoint = `/person/${person_id}/movie_credits`
  const resp = await http(endpoint, 'GET')

  return resp
}

export default {
  searchPeople,
  personDetails,
  personShowsCredits,
  personMoviesCredits,
}
