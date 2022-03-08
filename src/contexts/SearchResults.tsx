import { createContext } from 'react'
import { APITypes } from '../services'

interface SearchResultsProps {
  movies: APITypes.IMovieObjectResponse[]
  shows: APITypes.IShowObjectResponse[]
  people: APITypes.IPeopleObjectResponse[]
}

const SearchResults = createContext<SearchResultsProps>({
  movies: [],
  shows: [],
  people: [],
})

export default { SearchResults }
