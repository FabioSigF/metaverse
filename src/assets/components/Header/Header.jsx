import React from 'react'
import Logo from '../Logo/Logo'
import { Container, Nav, Wrapper } from './Header.styles'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Nav>
          <ul>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Collection</a>
            </li>
            <li>
              <a href="#!">Team</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </Nav>
      </Container>
    </Wrapper>
  )
}
