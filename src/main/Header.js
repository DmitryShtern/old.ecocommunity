import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 650px;
  height: 150px;
  display: wrap;
  
  text-align: center;
  
  vertical-align: middle;
  display: table-cell;
  
  background: green;
  
  border-radius: 10px;
`;

const Link = styled.a`
  color: white;
  padding: 1%;
  font-size: 250%;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    
    margin-right: 20px;
    
    border-radius: 15px;
`;

const Button = styled.img`
    width: 80px;
    height: 80px;
    
    margin-left: 5px;
    margin-right: 5px;
`;

const Header = ({}) => (
    <Container>
        <Link href={"/feed"}>
            <Logo src="/img/logo.png"/>
        </Link>
        <Link href={"/feed"}>
            <Button src="/img/feed_w.png"/>
        </Link>
        <Link href={"/gallery"}>
            <Button src="/img/gallery_w.png"/>
        </Link>
        <Link href={"/partners"}>
            <Button src="/img/partners_w.png"/>
        </Link>
        <Link href={"/about"}>
            <Button src="/img/about_w.png"/>
        </Link>
    </Container>
);

export default Header
