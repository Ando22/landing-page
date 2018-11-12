import React, { Component } from 'react';
import styled from "styled-components";

const Head = styled.div`
    width: 85%;
    position: relative;
    overflow: hidden;
    z-index: 20;
    margin: 0 auto;
`;

const Nav = styled.ul`
    list-style-type: none;
    margin: 0 -15px;
    padding: 0;
    overflow: hidden;
    float: right;
`;

const NavItem = styled.li`
    float: left;
    text-transform: lowercase;
    font-size: 24px;
`;

const Item = styled.a`
    display: block;
    color: rgb(85, 98, 112);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;


class Header extends React.Component {
    render(){
        
        return(
            <Head>
                <Nav>
                    <NavItem>
                        <Item>About Us</Item>
                    </NavItem>
                    <NavItem>
                        <Item>Contact</Item>
                    </NavItem>
                </Nav>
            </Head>
        )
    }
}

export default Header;