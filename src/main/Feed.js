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

const Feed = ({selected_category, posts}) => (
    <Container>
        <ListNews>
            {posts.filter(post => (post.category_id === selected_category)).map(post => (<News {...post}/>))}
        </ListNews>
    </Container>
);

export default Feed