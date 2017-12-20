import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-left: 2%;
  text-align: left;
`;

const NavigationBar = styled.div`
   background: grey;
   text-align: center;
   width: 46%;
`;

const Button = styled.input`
   background: green;
   font-size: 150%;
   color: white;
   padding: 1%;
   margin: 1%;
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
