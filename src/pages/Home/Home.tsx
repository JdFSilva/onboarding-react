import { useEffect, useState } from 'react'
import { BaseLayout } from '..'
import { moviesAPI, APITypes } from '../../services'
import { TabbedSearchList, PopularList } from '../../components'

import './Home.css'

interface ISearchResults {
  movies: APITypes.MovieObjectResponse[]
  shows: APITypes.ShowObjectResponse[]
  people: APITypes.PeopleObjectResponse[]
}

const Home = () => {
  const [popular, setPopular] = useState<APITypes.MovieDatabaseApiResponse>()

  const [searchResults, setSearchResults] = useState<ISearchResults>({
    movies: [],
    shows: [],
    people: [],
  })

  useEffect(() => {
    const getPopularMovies = async () => {
      const resp = await moviesAPI.popularMovies()
      setPopular(resp)
    }

    getPopularMovies()
  }, [])

  return (
    <BaseLayout setSearchResults={setSearchResults}>
      {/* SEARCH RESULTS LIST */}
      <div className="search-list-wrapper">
        <TabbedSearchList searchResults={searchResults} />
      </div>

      {/* POPULAR MOVIES LIST SIDEBAR*/}
      <div className="popular-list-wrapper">
        <PopularList
          popularList={
            (popular?.results.slice(0, 5) as APITypes.MovieObjectResponse[]) ||
            []
          }
        />
      </div>
    </BaseLayout>
  )
}

export default Home
