import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-left: 2%;
  text-align: left;
`

const NavigationBar = styled.div`
   background: grey;
   text-align: center;
   width: 46%;
`

const Button = styled.input`
   background: green;
   font-size: 150%;
   color: white;
   padding: 1%;
   margin: 1%;
`

const HeaderFeed = ({}) => (
    <Container>
        <NavigationBar>
            <Button value="Новости" type="button"/>
            <Button value="Статьи" type="button"/>
            <Button value="Газеты" type="button"/>
        </NavigationBar>
    </Container>
)

export default HeaderFeed
