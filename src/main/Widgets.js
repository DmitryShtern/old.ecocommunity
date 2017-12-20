import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 25%;
    height: 100%;
    
    position: fixed;
    
    margin: 6% 0 0 65%;
    
    background-image: url("http://localhost:8000/img/bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Widget = styled.div`
    width: 300px;
    height: 250px;
    
    background-color: rgba(244, 245, 247, 0.6); //#f4f5f7;
    
    border: 2px solid black;
    border-radius: 10px;
    
    padding: 10% 5% 5% 5%;
    
    text-align: center;
    
    &:last-child {
        margin-top: 20%;
    }
`;

const Button = styled.button`
    width: 65%;
    height: 15%;
    
    margin-top: 10%;
    
    border: 1px solid black;
    border-radius: 10px;
    
    background-color: green;
    
    font-size: 20px;
    
    color: white;
`;

const Widgets = () => (
    <Container>
        <Widget>
            <h3>Если у Вас есть желание и возможность внести вклад в организацию – будем очень признательны за
                помощь!</h3>
            <a href="http://localhost:3000/about">
                <Button>Пожертвовать</Button>
            </a>
        </Widget>
        <Widget>
            <h3>Вредят природе? Позвоните нам или зафиксируйте нарушение и отправьте данные на нашу почту!</h3>
            <h4>+7 (988) 38-928-48</h4>
            <a href="mailto:belecology@mail.ru?cc=ecosodr@gmail.com&subject=Contact%20from%20site">
                <Button>Связаться</Button>
            </a>
        </Widget>
    </Container>
);

export default Widgets