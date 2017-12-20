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

// const ul = styled.div`
//     // -moz-column-count: 2;
//     // -webkit-column-count: 2;
//     // column-count: 2;
// `;

const Board = ({ partners }) => (
    <Container>
        <ul>

            {partners.map(partner => (<ItemPartner {...partner}/>))}

            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}

            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}

            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}
            {/*<ItemPartner/>*/}
        </ul>
    </Container>
);

export default Board