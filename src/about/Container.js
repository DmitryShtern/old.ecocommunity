import React from 'react'
import styled from 'styled-components'
import Header from '../main/Header'
import Board from './Board'

const Screen = styled.div`
  wight: 1440px;
  height: 900px;
  
  padding-left: 10%;
`;

const Container = ({map}) => (
    <Screen>
        <Header/>
        <Board map={map}/>
    </Screen>
);

export default Container
