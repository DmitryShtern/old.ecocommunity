import React from 'react'
import Header from './Header'
import Feed from './Feed'
import styled from 'styled-components'

const Screen = styled.div`
    wight: 1440px;
    height: 900px;
      
    padding-left:10%;
`;

const Container = ({selected_category, selectCategory, posts}) => (
    <Screen>
        <Header/>
        <Feed selectCategory={selectCategory} selected_category={selected_category} posts={posts}/>
    </Screen>
);

export default Container
