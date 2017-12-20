import React from 'react'
import Header from './Header'
import HeaderFeed from './HeaderFeed'
import Feed from './Feed'
import styled from 'styled-components'

const Screen = styled.div`
  wight: 100%;
  height: 820px;
  background-repeat: no-repeat;
`;

const Container = ({selected_category, selectCategory, posts}) => (
  <Screen>
    <Header/>
    <HeaderFeed selectCategory={selectCategory} />
    <Feed selected_category={selected_category} posts={posts}/>
  </Screen>
);

export default Container
