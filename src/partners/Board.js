import React from 'react'
import styled from 'styled-components'
import ItemPartner from "./ItemPartner";

const Container = styled.div`
    height: 100%;
    width: 50%;
    
    background-color: #f4f5f7;   
    
    border: 2px solid black;
    border-radius: 10px;
`;

const ul = styled.div`
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    
     // flex-wrap: wrap;
`;

const Board = () => (
    <Container>
        <ul>
            <ItemPartner/>
            <ItemPartner/>
            <ItemPartner/>

            <ItemPartner/>
            <ItemPartner/>
            <ItemPartner/>

            <ItemPartner/>
            <ItemPartner/>
            <ItemPartner/>
        </ul>
    </Container>
);

export default Board