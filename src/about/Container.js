import React from 'react'
import styled from 'styled-components'
import Header from '../main/Header'
import Board from './Board'

const Screen = styled.div`
  wight: 1440px;
  height: 900px;
  
  padding-left: 10%;
`;

const Container = ({}) => (
    <Screen>
        <Header/>
        <Board/>
    </Screen>
);

export default Container
