import { useEffect, useState } from 'react'
import { BaseLayout } from '..'
import { moviesAPI } from '../../services'
import { DetailsCard, CreditsCard } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'
import { DetailsInterfaces } from '../../types'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'

const MovieDetails = () => {
  const navigate = useNavigate()

  const detailsTitles = ['status', 'release_date', 'vote_average', 'genres']

  const { id } = useParams()

  const [details, setDetails] = useState<DetailsInterfaces.IDetailsObject>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [credits, setCredits] = useState<DetailsInterfaces.ICreditsCard>({
    cast: [] as DetailsInterfaces.IMovieCast[],
    crew: [] as DetailsInterfaces.IMovieCrew[],
  })

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await moviesAPI.movieDetails(id || '')
      setDetails(movieDetails)

      const movieCredits = await moviesAPI.movieCredits(id || '')
      setCredits(movieCredits)
      setLoading(false)
    }

    getMovieDetails()
  }, [id])

  if (!id) {
    navigate('/')
    return <BaseLayout></BaseLayout>
  } else {
    return (
      <BaseLayout>
        <div>
          {/* TITLE */}
          <h3>{details.title}</h3>

          {/* DETAILS */}
          {<DetailsCard detailsKeys={detailsTitles} detailsObject={details} />}

          {/* CREDITS */}

          {loading ? (
            <Container
              fixed
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '16px',
              }}
            >
              <CircularProgress />
            </Container>
          ) : (
            <CreditsCard creditsList={credits} />
          )}
        </div>
      </BaseLayout>
    )
  }
}

export default MovieDetails
