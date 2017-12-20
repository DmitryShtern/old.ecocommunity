import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 35%;

    background-color: white;
    
    margin-bottom: 5%;
    margin-top: 5%;
    margin-right: 5%;
    margin-left: 4%;
    
    padding: 10px;
    
    border: 1px solid gray;
    border-radius: 5px;
    
    display: inline-block;
    
    text-align: center;
    
`;

const ItemPartner = ({ name, description, image, source  }) => (
    <Container>
        <img src={image} alt="Partner" width="90%"/>
        <p>{name}</p>
        <p>{description}</p>
        <a href={source} target="_blank" >Ссылка</a>
    </Container>
);

export default ItemPartner