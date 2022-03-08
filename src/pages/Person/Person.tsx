import { useEffect, useState } from 'react'
import { BaseLayout } from '..'
import { peopleAPI } from '../../services'
import { DetailsCard, MovieCarousel, ShowCarousel } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'
import { DetailsInterfaces } from '../../types'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'

const PersonDetails = () => {
  const navigate = useNavigate()

  const detailsTitles = ['known_for_department', 'birthday', 'biography']

  const { id } = useParams()

  const [loading, setLoading] = useState<boolean>(true)
  const [details, setDetails] = useState<DetailsInterfaces.IDetailsObject>({})
  const [aliases, setAliases] = useState<string>('')
  const [movies, setMovies] = useState<DetailsInterfaces.IMovie[]>([])
  const [shows, setShows] = useState<DetailsInterfaces.IShow[]>([])

  useEffect(() => {
    const getPersonDetails = async () => {
      const personDetails = await peopleAPI.personDetails(id || '')
      const personName = personDetails.name as string
      const personAliases = personDetails.also_known_as as string[]
      setAliases(`${personName}, ${personAliases.join(', ')}`)
      setDetails(personDetails)

      // get movies
      const personMoviesCredits = (await peopleAPI.personMoviesCredits(
        id || ''
      )) as DetailsInterfaces.IMovieCredits
      const moviesCredits = personMoviesCredits.crew.concat(
        personMoviesCredits.cast
      )
      setMovies(moviesCredits)

      // get shows
      const personShowsCredits = (await peopleAPI.personShowsCredits(
        id || ''
      )) as DetailsInterfaces.IShowCredits
      const showsCredits = personShowsCredits.crew.concat(
        personShowsCredits.cast
      )
      console.log(personShowsCredits)
      setShows(showsCredits)

      setLoading(false)
    }

    getPersonDetails()
  }, [id])

  if (!id) {
    navigate('/')
    return <BaseLayout></BaseLayout>
  } else {
    return (
      <BaseLayout>
        <div>
          {/* TITLE */}
          <h3>{aliases}</h3>

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
            <Card>
              {/* MOVIES */}
              <p>MOVIES</p>
              <MovieCarousel movies={movies} />

              {/* SHOWS */}
              <p>SHOWS</p>
              <ShowCarousel shows={shows} />
            </Card>
          )}
        </div>
      </BaseLayout>
    )
  }
}

export default PersonDetails
