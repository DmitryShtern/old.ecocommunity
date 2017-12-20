import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 700px;
    width: 50%;
    
    background-color: #ecffdd;   
    
    border: 2px solid black;
    border-radius: 10px;    
`;

const AboutUs = styled.div`
    width: 90%;
    height: 200px;
    
    margin-left: 5%;
    margin-right: 5%;

    text-align: center;
`;

const MapImg = styled.img`
    width: 100%;

    border: 2px solid black;
    border-radius: 10px;
    
    margin-left: -2px;
`;

const SocIcons = styled.div`
    text-align: center;
    
    margin-top: 30px;

`;

const ICO = styled.img`
    margin-left: 30px;
    margin-right: 30px;
`;

const Board = ({map}) => (
    <Container>
        <AboutUs>
            <h3>Краснодарская краевая экологическая общественная организация "Экологическое содружество" осуществляет деятельность в сфере охраны окружающей среды на территории Белореченского района Краснодарского края.</h3>
            <p>Мы находимся по адресу: Краснодарский край, г. Белореченск, ул. Интернациональная, д. 27</p>
            <p>Телефон: +7 (988) 389 - 28 - 48</p>
        </AboutUs>
        <MapImg src={map}/>
        <SocIcons>
            <a href="https://vk.com/kkooeco">
                <ICO src="http://localhost:8000/img/socicons/vk.png" width="50px"/>
            </a>
            <a href="https://ok.ru/kkooeco">
                <ICO src="http://localhost:8000/img/socicons/ok.png" width="50px"/>
            </a>
            <a href="https://fb.com/kkooeco">
                <ICO src="http://localhost:8000/img/socicons/fb.png" width="50px"/>
            </a>
        </SocIcons>
    </Container>
);

export default Board