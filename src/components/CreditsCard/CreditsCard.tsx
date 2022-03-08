import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { PeopleCarousel } from '../../components'
import { DetailsInterfaces } from '../../types'

interface ICreditsCardProps {
  creditsList: DetailsInterfaces.ICreditsCard
}

export default function CreditsCard({ creditsList }: ICreditsCardProps) {
  const cast: DetailsInterfaces.IMovieCastByDepartment = {}
  const crew: DetailsInterfaces.IMovieCrewByDepartment = {}

  creditsList.cast.map((person) => {
    const department = person.known_for_department as string
    if (!cast[department]) {
      cast[department] = []
    }
    cast[department].push(person)
  })

  creditsList.crew.map((person) => {
    const department = person.known_for_department as string
    if (!crew[department]) {
      crew[department] = []
    }
    crew[department].push(person)
  })

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {/* CAST */}
        <p>CAST</p>
        {Object.keys(cast).map((key) => {
          return (
            <React.Fragment key={key}>
              {/* DEPARTMENT TITLE */}
              <p>{key}</p>
              {/* PEOPLE CAROUSEL */}
              <PeopleCarousel people={cast[key]} />
            </React.Fragment>
          )
        })}

        {/* CREW */}
        <p>CREW</p>
        {Object.keys(crew).map((key) => {
          return (
            <React.Fragment key={key}>
              {/* DEPARTMENT TITLE */}
              <p>{key}</p>
              {/* PEOPLE CAROUSEL */}
              <PeopleCarousel people={crew[key]} />
            </React.Fragment>
          )
        })}
      </Card>
    </Box>
  )
}
