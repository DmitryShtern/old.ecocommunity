import React from 'react'
import styled from 'styled-components'
import Header from '../main/Header'
import Board from './Board'

const Screen = styled.div`
    padding-left: 10%;
    
    background-image: url("http://localhost:8000/img/bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Container = ({albums}) => (
    <Screen>
        <Header/>
        <Board albums={albums}/>
    </Screen>
);

export default Container
