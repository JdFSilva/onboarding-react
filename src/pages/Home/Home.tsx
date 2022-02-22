import { useEffect, useState } from 'react'
import { BaseLayout } from '..'
import { moviesAPI, APITypes } from '../../services'
import { TabbedSearchList, PopularList } from '../../components'

import './Home.css'

const Home = () => {
  const [popular, setPopular] = useState<APITypes.MovieDatabaseApiResponse>()

  useEffect(() => {
    const getPopularMovies = async () => {
      const resp = await moviesAPI.popularMovies()
      setPopular(resp)
    }

    getPopularMovies()
  }, [])

  return (
    <BaseLayout>
      {/* SEARCH RESULTS LIST */}
      <div className="search-list-wrapper">
        <TabbedSearchList />
      </div>

      {/* POPULAR MOVIES LIST SIDEBAR*/}
      <div className="popular-list-wrapper">
        <PopularList popularList={popular?.results.slice(0, 5) || []} />
      </div>
    </BaseLayout>
  )
}

export default Home
