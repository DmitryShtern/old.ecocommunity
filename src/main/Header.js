import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 2%;
`

const Link = styled.a`
  color: white;
  padding: 1%;
  font-size: 250%;
  background: green;
`

const Logo = styled.img`
    width: 70px;
    margin-top:2%;
    height: 70px;
`

const Header = ({}) => (
    <Container>
        <Link href="/main">Лента</Link>
        <Link href="/gallery">Галерея</Link>
        <Link href="/partners">Партнеры</Link>
        <Link href="/about">О нас</Link>
    </Container>
)

export default Header
