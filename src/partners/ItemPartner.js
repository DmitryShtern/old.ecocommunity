import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 35%;

    background-color: white;
    
    margin-bottom: 10%;
    margin-right: 6%;
    margin-left: 6%;
    
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
        <a href={source} target="_blank">Ссылка</a>
    </Container>
);

export default ItemPartner