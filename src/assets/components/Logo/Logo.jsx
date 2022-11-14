import React from 'react'
import { Title, Wrapper, Img } from './Logo.styles'
import logoImg from '../../img/logo/logo.png'
export default function Logo() {
  return (
    <Wrapper>
      <a href="#!">
        <Img src={logoImg} alt="Metaverse Virtual World" />
        <Title>Metaverse<br />Virtual World</Title>
      </a>
    </Wrapper>
  )
}
