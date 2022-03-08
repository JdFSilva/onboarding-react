import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { DetailsInterfaces } from '../../types'

interface IMovieCardProps {
  style?: React.CSSProperties
  movie: DetailsInterfaces.IMovie
}

export default function MovieCard({ style, movie }: IMovieCardProps) {
  const cardMedia = movie.poster_path ? (
    <CardMedia
      component="img"
      height="140"
      image={`${process.env.REACT_APP_IMAGE_API_URL}${movie.poster_path}`}
    />
  ) : (
    <CardContent>
      <Typography noWrap>No Poster</Typography>
    </CardContent>
  )
  return (
    <Card sx={{ width: 180, display: 'inline-block', ...style }}>
      <Button
        href={`/movies/${movie.id}`}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        {cardMedia}
        <CardContent sx={{ maxWidth: '100%' }}>
          <Typography noWrap>{movie.title}</Typography>
        </CardContent>
      </Button>
    </Card>
  )
}
