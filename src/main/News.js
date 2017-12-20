import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
    width: 20%;
    text-align: left;
    margin-left: 5%;
    font-size:150%;
`;

const Image = styled.img`
    width: 20%;
`;

const ContainerNews = styled.div`
    border-style: solid;
    text-align: center;
    border-width: 2px;
    
    background-color: white;
`;

const News = ({id, title, content, image}) => (
    <ContainerNews key={id}>
        <Title>{title}</Title>
        <Image src={image}/>
        <p>{content}</p>
    </ContainerNews>
);

export default News
