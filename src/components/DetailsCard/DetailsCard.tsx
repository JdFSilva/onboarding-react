import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DetailsInterfaces } from '../../types'

interface IDetailsCard {
  detailsObject: DetailsInterfaces.IDetailsObject
  detailsKeys: string[]
}

export default function DetailsCard({
  detailsKeys,
  detailsObject,
}: IDetailsCard) {
  const details = []
  for (const i in detailsKeys) {
    const key = detailsKeys[i]

    // special case: genres
    // iterate items
    if (Array.isArray(detailsObject[key])) {
      const genres = detailsObject[key] as DetailsInterfaces.IGenre[]

      details.push(<li key={key}>{key}</li>)
      const movieGenres = genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))

      details.push(<ul key={key + 'ul'}>{movieGenres}</ul>)
    } else {
      details.push(<li key={key}>{`${key}: ${detailsObject[key]}`}</li>)
    }
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <ul></ul>
        {details}
      </Card>
    </Box>
  )
}
