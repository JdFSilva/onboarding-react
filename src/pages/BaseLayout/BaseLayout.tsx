import React from 'react'
import { Header } from '../../components'
import Container from '@mui/material/Container'
import { APITypes } from '../../services'

import './BaseLayout.css'

type BaseLayoutProps = {
  setSearchResults: (a: {
    movies: APITypes.MovieObjectResponse[]
    shows: APITypes.ShowObjectResponse[]
    people: APITypes.PeopleObjectResponse[]
  }) => void
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  setSearchResults,
  children,
}) => {
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
