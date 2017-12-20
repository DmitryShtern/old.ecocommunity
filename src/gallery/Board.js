import React from 'react'
import styled from 'styled-components'
import ItemAlbum from "./ItemAlbum";

const Container = styled.div`
    width: 646px; //-4px (2px border * 2)
    
    background-color: rgba(244, 245, 247, 0.8); //#f4f5f7;   
    
    border: 2px solid black;
    border-radius: 10px;  
    
    margin-bottom: 9%;
`;

const Board = ({ albums }) => (
    <Container>
        <ul>
            {albums.map(album => (<ItemAlbum {...album}/>))}
        </ul>
    </Container>
);

export default Board