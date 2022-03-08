import { APITypes } from '../../services'
import { ShowCard } from '..'

import './ShowCarousel.css'

interface IShowCarouselProps {
  shows: APITypes.IShowObjectResponse[]
}

export default function ShowCarousel({ shows }: IShowCarouselProps) {
  const ignoreDuplicates: number[] = []
  const cards = shows.map((show) => {
    if (!ignoreDuplicates.includes(show.id)) {
      ignoreDuplicates.push(show.id)
      return <ShowCard key={`${show.id}`} show={show} />
    }
  })

  return <div className="carousel">{cards}</div>
}
