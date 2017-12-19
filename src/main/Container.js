import React from 'react'
import Header from './Header'
import HeaderFeed from './HeaderFeed'
import Feed from './Feed'
import styled from 'styled-components'

const Screen = styled.div`
  padding-left:10%;
  wight:auto;
  height:820px;
  background-image: url(/Users/VladislavNovikov/PycharmProjects/ecocommunity/public/1Feed.png);
  background-repeat: no-repeat;
`

const Container = ({}) => (
  <Screen>
    <Header/>
    <HeaderFeed/>
    <Feed/>
  </Screen>
)

export default Container
