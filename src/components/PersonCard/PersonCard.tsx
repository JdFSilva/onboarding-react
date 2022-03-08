import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { DetailsInterfaces } from '../../types'

interface IPersonCardProps {
  person: DetailsInterfaces.IMovieCast | DetailsInterfaces.IMovieCrew
}

export default function PersonCard({ person }: IPersonCardProps) {
  const cardMedia = person.profile_path ? (
    <CardMedia
      component="img"
      height="140"
      image={`${process.env.REACT_APP_IMAGE_API_URL}${person.profile_path}`}
    />
  ) : (
    <CardContent>
      <Typography noWrap>No Picture</Typography>
    </CardContent>
  )
  return (
    <Card sx={{ width: 180, display: 'inline-block' }}>
      <Button
        href={`/people/${person.id}`}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        {cardMedia}
        <CardContent sx={{ maxWidth: '100%' }}>
          <Typography noWrap>{person.name}</Typography>
        </CardContent>
      </Button>
    </Card>
  )
}
