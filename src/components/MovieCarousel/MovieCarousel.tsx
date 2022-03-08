import { DetailsInterfaces } from '../../types'
import { MovieCard } from '..'

import './MovieCarousel.css'

interface IMovieCarouselProps {
  movies: DetailsInterfaces.IMovie[]
}

export default function MovieCarousel({ movies }: IMovieCarouselProps) {
  const ignoreDuplicates: number[] = []
  const cards = movies.map((movie) => {
    if (!ignoreDuplicates.includes(movie.id)) {
      ignoreDuplicates.push(movie.id)
      return <MovieCard key={`${movie.id}`} movie={movie} />
    }
  })

  return <div className="carousel">{cards}</div>
}
