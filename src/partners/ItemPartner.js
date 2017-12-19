import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 22%;
    height: 200px;

    background-color: #f4f5f7;
    
    margin-top: 10%;
    margin-right: 5%;
    margin-left: 5%;
    
    border: 1px solid gray;
    border-radius: 5px;
    
    display: inline-block;
    
    text-align: center;
`;

const ItemPartner = ({}) => (
    <Container>
        <img src="http://www.easypaysolutions.com/wp-content/uploads/partner.png" alt="Partner" width="100%"/>
        <p>Partner name</p>
    </Container>
);

export default ItemPartner