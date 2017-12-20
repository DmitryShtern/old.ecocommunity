import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: left;
  
  margin-top: 20px;
`;

const NavigationBar = styled.div`
   text-align: center;
   width: 100%;
`;

const Button = styled.input`
   background: green;
   
   padding: 1%;
   margin: 1% 3% 1% 3%;
   
   font-size: 150%;
   color: white;
`;

const HeaderFeed = ({selectCategory}) => (
    <Container>
        <NavigationBar>
            <Button value="Новости" type="button" onClick={() => {selectCategory(1)}}/>
            <Button value="Статьи" type="button" onClick={() => {selectCategory(2)}}/>
            <Button value="Газеты" type="button" onClick={() => {selectCategory(3)}}/>
        </NavigationBar>
    </Container>
);

export default HeaderFeed
