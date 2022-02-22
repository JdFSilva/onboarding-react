import React from 'react'
import { Header } from '../../components'
import Container from '@mui/material/Container'
import { APITypes } from '../../services'

import './BaseLayout.css'

interface ISearchResults {
  movies: APITypes.MovieObjectResponse[]
  shows: APITypes.ShowObjectResponse[]
  people: APITypes.PeopleObjectResponse[]
}

const BaseLayout: React.FC = ({ children }) => {
  const [searchResults, setSearchResults] = React.useState<ISearchResults>({
    movies: [],
    shows: [],
    people: [],
  })

  return (
    <>
      {/* HEADER */}
      <Header setSearchResults={setSearchResults} />

      {/* CONTENT */}
      <Container className="content-layout" disableGutters>
        {children}
      </Container>
    </>
  )
}

export default BaseLayout
