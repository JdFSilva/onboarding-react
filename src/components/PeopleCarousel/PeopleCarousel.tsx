import { DetailsInterfaces } from '../../types'
import { PersonCard } from '../../components'

import './PeopleCarousel.css'

interface ICarouselProps {
  people: DetailsInterfaces.IMovieCast[] | DetailsInterfaces.IMovieCrew[]
}

export default function PeopleCarousel({ people }: ICarouselProps) {
  const ignoreDuplicates: number[] = []
  const cards = people.map((person) => {
    if (!ignoreDuplicates.includes(person.id)) {
      ignoreDuplicates.push(person.id)
      return <PersonCard key={`${person.id}`} person={person} />
    }
  })

  return <div className="carousel">{cards}</div>
}
