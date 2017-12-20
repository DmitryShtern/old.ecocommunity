import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 50%;
    
    padding-bottom: 20px;
    
    background-color: #ecffdd;   
    
    border: 2px solid black;
    border-radius: 10px;    
    
    text-align: center;
`;

const AboutUs = styled.div`
    width: 90%;
    height: 230px;
    
    margin-left: 5%;
    margin-right: 5%;

`;

const MapImg = styled.img`
    width: 100%;

    border: 2px solid black;
    border-radius: 10px;
    
    margin-left: -2px;
`;

const SocIcons = styled.div`    
    margin-top: 30px;

`;

const ICO = styled.img`
    margin-left: 30px;
    margin-right: 30px;
`;

const Board = ({map}) => {
    return (
        <Container>
            <AboutUs>
                <h3>Краснодарская краевая экологическая общественная организация "Экологическое содружество"
                    осуществляет деятельность в сфере охраны окружающей среды на территории Белореченского района
                    Краснодарского края.</h3>
                <p>Мы находимся по адресу: Краснодарский край, г. Белореченск, ул. Интернациональная, д. 27</p>
                <p>Телефон: +7 (988) 389 - 28 - 48</p>
                <h3>Мы на карте:</h3>
            </AboutUs>
            <a target="_blank" rel="noopener noreferrer"
               href="https://www.google.com/maps/place/Internatsional'naya+Ulitsa,+27,+Belorechensk,+Krasnodarskiy+kray,+352637/@44.7543752,39.872228,702m/data=!3m1!1e3!4m5!3m4!1s0x40f0c5f27904432d:0x90f4489b2cfe9c88!8m2!3d44.7543752!4d39.8744167">
                <MapImg src={map}/>
            </a>
            <SocIcons>
                <a href="https://vk.com/kkooeco" target="_blank" rel="noopener noreferrer">
                    <ICO src="http://localhost:8000/img/socicons/vk.png" width="50px"/>
                </a>
                <a href="https://ok.ru/kkooeco" target="_blank" rel="noopener noreferrer">
                    <ICO src="http://localhost:8000/img/socicons/ok.png" width="50px"/>
                </a>
                <a href="https://fb.com/kkooeco" target="_blank" rel="noopener noreferrer">
                    <ICO src="http://localhost:8000/img/socicons/fb.png" width="50px"/>
                </a>
            </SocIcons>
        </Container>
    );
};

export default Board