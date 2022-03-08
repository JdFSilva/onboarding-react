import { useEffect, useState, Fragment } from 'react'
import { BaseLayout } from '..'
import { showsAPI } from '../../services'
import { DetailsCard, CreditsCard } from '../../components'
import { useParams, useNavigate } from 'react-router-dom'
import { DetailsInterfaces } from '../../types'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'

import _ from 'lodash'

const ShowDetails = () => {
  const navigate = useNavigate()

  const detailsTitles = [
    'status',
    'first_air_date',
    'vote_average',
    'number_of_seasons',
    'number_of_episodes',
    'genres',
  ]

  const { id } = useParams()

  const [details, setDetails] = useState<DetailsInterfaces.IDetailsObject>({})
  const [seasonsCredits, setSeasonsCredits] = useState<
    DetailsInterfaces.ICreditsCard[]
  >([])

  useEffect(() => {
    const getShowDetails = async () => {
      const showDetails = await showsAPI.showDetails(id || '')
      setDetails(showDetails)

      _.range(showDetails.number_of_seasons).map(
        async (season_number: number) => {
          season_number++
          const seasonCredits = await showsAPI.showCredits(
            id || '',
            season_number.toString()
          )
          setSeasonsCredits((sc) => [...sc, seasonCredits])
        }
      )
    }

    getShowDetails()
  }, [id])

  if (!id) {
    navigate('/')
    return <BaseLayout></BaseLayout>
  } else {
    return (
      <BaseLayout>
        <div>
          {/* TITLE */}
          <h3>{details.name}</h3>

          {/* DETAILS */}
          {<DetailsCard detailsKeys={detailsTitles} detailsObject={details} />}

          {/* CREDITS */}
          {details.number_of_seasons !== seasonsCredits.length ? (
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
            seasonsCredits.map((season, index) => {
              return (
                <Fragment key={index}>
                  <p>{`Season ${index + 1}`}</p>
                  <CreditsCard creditsList={season} />
                </Fragment>
              )
            })
          )}
        </div>
      </BaseLayout>
    )
  }
}

export default ShowDetails
