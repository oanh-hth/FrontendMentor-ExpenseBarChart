import React from 'react'
import { Container } from './styles/Container.styled'
import Logo from '../images/logo.svg'
import {StyleHeader} from './styles/Header.styled'

export default function Header() {
  return (
    <Container direction="row" bg={({theme}) => theme.colors.header}>
      <div>
        <StyleHeader fontSize={ ({theme}) => theme.fontSize.normal } className='top-text'>My balance</StyleHeader>
        <StyleHeader
          fontSize={({ theme }) => theme.fontSize.big}
          fontWeight={({ theme }) => theme.fontWeight.bold}
        >
          $921.48
          </StyleHeader>
      </div>  
     <img src={Logo} alt='logo'/>
    </Container>
  )
}
