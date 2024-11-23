import { Container, Navbar } from 'react-bootstrap'
import React from 'react'

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  )
}
