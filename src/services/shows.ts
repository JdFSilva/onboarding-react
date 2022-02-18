import http from "./common"

const searchShows = async (searchString: string) => {
  const endpoint = `/search/search-tv-shows?query=${searchString}`
  const resp = await http(endpoint, "GET")

  if (!resp.ok) {
    const message = `An error has occured: ${resp.status}`
    throw new Error(message)
  }

  return resp.data
}

export default searchShows
