import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
    width: 20%;
    text-align: left;
    margin-left: 5%;
    font-size:150%;
`

const Image = styled.img`
    width: 20%;
`

const ContainerNews = styled.div`
    border-style: solid;
    text-align: center;
    border-width: 2px;
`

const News = () => (
    <ContainerNews>
        <Title>Новость</Title>
        <Image src="https://static.wixstatic.com/media/a8f7f8_d6bbaf029f6541008f08a3ad130a4151.png/v1/fill/w_113,h_113,al_c,usm_0.66_1.00_0.01/a8f7f8_d6bbaf029f6541008f08a3ad130a4151.png"/>
        <p>Описание Описание Описание Описание Описание Описание</p>
    </ContainerNews>
)

export default News
