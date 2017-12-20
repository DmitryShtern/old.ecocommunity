import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 20%;
    height: 200px;

    background-color: white;
    
    // margin-bottom: 10%;
    margin-right: 6%;
    margin-left: 6%;
    
    border: 1px solid gray;
    border-radius: 5px;
    
    display: inline-block;
    
    text-align: center;
`;

const ItemAlbum = ({ name, preview }) => (
    <Container>
        {console.log("Preview = " + preview)}
        <img src={preview} alt={"Preview loading error with album '" + name + "'"} width="100%"/>
        <p>{name}</p>
    </Container>
);

export default ItemAlbum