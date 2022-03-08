import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BaseLayout } from '..'
import { moviesAPI, showsAPI, peopleAPI, APITypes } from '../../services'
import { TabbedSearchList } from '../../components'

interface ISearchResults {
  movies: APITypes.IMovieObjectResponse[]
  shows: APITypes.IShowObjectResponse[]
  people: APITypes.IPeopleObjectResponse[]
}

const Search = () => {
  const [searchParams] = useSearchParams()

  const searchQuery = searchParams.get('q')

  const [searchResults, setSearchResults] = useState<ISearchResults>({
    movies: [],
    shows: [],
    people: [],
  })

  useEffect(() => {
    const search = async () => {
      const moviesList = await moviesAPI.searchMovies(searchQuery || '')
      const movies = moviesList.results.slice(
        0,
        5
      ) as APITypes.IMovieObjectResponse[]

      const showsList = await showsAPI.searchShows(searchQuery || '')
      const shows = showsList.results.slice(
        0,
        5
      ) as APITypes.IShowObjectResponse[]

      const peopleList = await peopleAPI.searchPeople(searchQuery || '')
      const people = peopleList.results.slice(
        0,
        5
      ) as APITypes.IPeopleObjectResponse[]

      setSearchResults({
        movies,
        shows,
        people,
      })
    }

    search()
  }, [searchQuery])

  return (
    <BaseLayout>
      {/* SEARCH RESULTS LIST */}
      <TabbedSearchList searchResults={searchResults} />
    </BaseLayout>
  )
}

export default Search
