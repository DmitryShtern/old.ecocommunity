import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 650px;
  height: 100px;
  display: wrap;
  
  text-align: center;
  
  vertical-align: middle;
  display: table-cell;
  
  background: green;
`;

const Link = styled.a`
  color: white;
  padding: 1%;
  font-size: 250%;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Button = styled.img`
    width: 80px;
    height: 80px;
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
