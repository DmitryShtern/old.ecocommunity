import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 650px;
    height: 125px;
    
    text-align: center;
    
    vertical-align: middle;
    display: table-cell;
    
    background: green;
    
    border-radius: 10px;  
`;

const Link = styled.a`
    padding: 1%;
`;

const Logo = styled.img`
    width: 75px;
    height: 75px;
    
    margin-right: 20px;
    
    border: 1px solid gray;
    border-radius: 15px;
`;

const Button = styled.img`
    width: 60px;
    height: 60px;
    
    margin-left: 5px;
    margin-right: 5px;
`;

const Header = () => (
    <Container>
        <Link href={"/feed"}>
            <Logo src="/img/logo.png"/>
            {/*<p>Feed</p>*/}
        </Link>
        <Link href={"/feed"}>
            <Button src="/img/feed_w.png "/>
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
