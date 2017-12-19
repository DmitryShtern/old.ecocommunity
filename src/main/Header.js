import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: auto;
  padding: 2%;
  margin-left: auto;
  margin-right: auto;
  background: black;
`

const Button = styled.input`
  width: 23%;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 450%;
  background: white;
`

const Header = ({
  openTableProduct,
  openTableCheck,
  openGraph,
  openTableABC,
  closeTableProduct,
  closeTableCheck,
  closeGraph,
  closeTableABC,
}) => (
  <Container>
    <Button
      type="button"
      value="Товары"
      onClick={() => (
        openTableProduct(), closeTableCheck(), closeTableABC(), closeGraph()
      )}
    />
    <Button
      type="button"
      value="Продажи"
      onClick={() => (
        openTableCheck(), closeTableProduct(), closeTableABC(), closeGraph()
      )}
    />
    <Button
      type="button"
      value="График продаж"
      onClick={() => (
        openGraph(), closeTableProduct(), closeTableCheck(), closeTableABC()
      )}
    />
    <Button
      type="button"
      value="ABC анализ"
      onClick={() => (
        openTableABC(), closeTableProduct(), closeTableCheck(), closeGraph()
      )}
    />
  </Container>
)

export default Header
