import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
    width: 100%;
    text-align: left;
    font-size: 150%;  
`;

const Image = styled.img`
    width: 60%;
    
    margin-left: 30%;
    
    border: 1px solid #f4f5f7;
    border-radius: 5px;
`;

const Content = styled.p`
    text-align: center;
    font-size: 100%;
    
    margin-top: 20px;
`;

const ContainerNews = styled.div`
    width: 80%;
    // height: 500px;

    background-color: white;
    
    margin-bottom: 10%;
    margin-right: 5%;
    // margin-left: 5%;
    
    padding-left: 5%;
    padding-right: 5%;
    
    border: 1px solid gray;
    border-radius: 5px;
    
    
    // text-align: center;  
`;

const News = ({title, content, image}) => (
    <ContainerNews>
        <Title>{title}</Title>
        <a target="_blank" href={image}>
            <Image src={image}/>
        </a>
        <Content>{content}</Content>
    </ContainerNews>
);

export default News
