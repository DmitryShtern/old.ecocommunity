import React from 'react'
import styled from 'styled-components'
import Header from '../main/Header'
import Board from './Board'

const Screen = styled.div`
  padding-left:10%;
  wight:auto;
  height:820px;
  background-image: url(/Users/VladislavNovikov/PycharmProjects/ecocommunity/public/1Feed.png);
  background-repeat: no-repeat;
`;

const Container = ({}) => (
    <Screen>
        <Header/>
        <Board/>
    </Screen>
);

export default Container
