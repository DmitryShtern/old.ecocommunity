import React from 'react'
import styled from 'styled-components'
import ItemPartner from "./ItemPartner";

const Container = styled.div`
    height: 100%;
    width: 50%;
    
    background-color: #f4f5f7;   
    
    border: 2px solid black;
    border-radius: 10px;
    
    padding-top: 3%;
`;

const Board = ({ partners }) => (
    <Container>
        <ul>

            {partners.map(partner => (<ItemPartner {...partner}/>))}
        </ul>
    </Container>
);

export default Board