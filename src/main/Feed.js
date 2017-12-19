import React from 'react'
import styled from 'styled-components'
import News from './News'

const ContainerList = styled.div`
    width: 46%;
    margin-left:2%;
    text-align: center;
`

const ListNews = styled.div`
    text-align: center;
`

const Feed = () => (
    <ContainerList>
        <ListNews>
            <News/>
            <News/>
            <News/>
        </ListNews>
    </ContainerList>
)

export default Feed