import React from 'react'
import Header from './Header'
import Feed from './Feed'
import styled from 'styled-components'

const Screen = styled.div`
    padding-left: 10%;
    
    background-image: url("http://localhost:8000/img/bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;  
`;

const Container = ({selected_category, selectCategory, posts}) => (
    <Screen>
        <Header/>
        <Feed selectCategory={selectCategory} selected_category={selected_category} posts={posts}/>
    </Screen>
);

export default Container
