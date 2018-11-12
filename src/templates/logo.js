import React, { Components } from 'react';
import styled from "styled-components";

const Left = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 1.5em;
    margin: auto;
    left: 0;
    -webkit-transform-origin: 0 50%;
    -moz-transform-origin: 0 50%;
        -ms-transform-origin: 0 50%;
        -o-transform-origin: 0 50%;
            transform-origin: 0 50%;
    -webkit-transform: rotate(-90deg) translate(-50%, 50%);
    -moz-transform: rotate(-90deg) translate(-50%, 50%);
        -ms-transform: rotate(-90deg) translate(-50%, 50%);
        -o-transform: rotate(-90deg) translate(-50%, 50%);
            transform: rotate(-90deg) translate(-50%, 50%);
`;

const Title = styled.h1`
    color : rgb(85, 98, 112);
    font-size: 26px;
`;

const Xred = styled.span`
    color : #EA222D;
`;


class Logo extends React.Component{

    render(){
        return(
            <Left>
                <Title>
                    <Xred>X</Xred>iber Inc.
                </Title>
            </Left>
        )
    }
}

export default Logo;