import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { APITypes } from '../../services'

interface IShowCardProps {
  show: APITypes.IShowObjectResponse
}

export default function ShowCard({ show }: IShowCardProps) {
  const cardMedia = show.poster_path ? (
    <CardMedia
      component="img"
      height="140"
      image={`${process.env.REACT_APP_IMAGE_API_URL}${show.poster_path}`}
    />
  ) : (
    <CardContent>
      <Typography noWrap>No Poster</Typography>
    </CardContent>
  )
  return (
    <Card sx={{ width: 180, display: 'inline-block' }}>
      <Button
        href={`/shows/${show.id}`}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        {cardMedia}
        <CardContent sx={{ maxWidth: '100%' }}>
          <Typography noWrap>{show.name}</Typography>
        </CardContent>
      </Button>
    </Card>
  )
}
