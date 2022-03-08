import React from 'react'
import { Header } from '../../components'
import Container from '@mui/material/Container'

import './BaseLayout.css'

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <Container className="content-layout" disableGutters>
        {children}
      </Container>
    </>
  )
}

export default BaseLayout
