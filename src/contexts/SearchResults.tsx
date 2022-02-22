import { createContext } from 'react'
import { APITypes } from '../services'

interface SearchResultsProps {
  movies: APITypes.MovieObjectResponse[]
  shows: APITypes.ShowObjectResponse[]
  people: APITypes.PeopleObjectResponse[]
}

const SearchResults = createContext<SearchResultsProps>({
  movies: [],
  shows: [],
  people: [],
})

export default { SearchResults }
