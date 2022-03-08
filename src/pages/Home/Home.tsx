import { useEffect, useState } from 'react'
import { BaseLayout } from '..'
import { moviesAPI, APITypes } from '../../services'
import { MovieCard } from '../../components'

import './Home.css'

const Home = () => {
  const [popular, setPopular] = useState<APITypes.IMovieObjectResponse[]>([])

  useEffect(() => {
    const getPopularMovies = async () => {
      const resp = await moviesAPI.popularMovies()
      console.log('entrei')
      console.log(resp)
      const popularMovies = resp.results as APITypes.IMovieObjectResponse[]
      setPopular(popularMovies)
    }

    getPopularMovies()
  }, [])

  return (
    <BaseLayout>
      {/* POPULAR MOVIES */}
      <div>
        {popular.map((movie, idx) => {
          if ((idx + 1) % 5 === 0) {
            return (
              <MovieCard
                style={{ width: 'calc(20% - 32px)', minWidth: '160px' }}
                key={`${movie.id}`}
                movie={movie}
              />
            )
          }
          return (
            <MovieCard
              style={{
                width: 'calc(20% - 32px)',
                minWidth: '160px',
                marginRight: '8px',
              }}
              key={`${movie.id}`}
              movie={movie}
            />
          )
        })}
      </div>
    </BaseLayout>
  )
}

export default Home
