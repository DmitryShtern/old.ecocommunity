import React from 'react'
import styled from 'styled-components'
import News from './News'

const Container = styled.div`
    height: 100%;
    width: 50%;
    
    background-color: #f4f5f7;   
    
    border: 2px solid black;
    border-radius: 10px;
`;

const ListNews = styled.ul`
    text-align: center;
`;

const Feed = () => (
    <Container>
        <ListNews>
            <News/>
            <News/>
            <News/>
        </ListNews>
    </Container>
);

export default Feed