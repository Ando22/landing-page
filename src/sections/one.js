import React, { Components } from 'react';
import {Section} from 'react-fullpage';
import styled from "styled-components";
import { StyleSheet, css } from 'aphrodite';

const Botwrap = styled.div`
    position: absolute;
    overflow: hidden;
    display: block;
    width: 70%;
    bottom: 20%;
`;

const TitleTeam = styled.h1`
    font-size: 72px;
    display: block;
    margin-bottom: 15px;
`;

const Xred = styled.span`
    color : #EA222D;
    font-size : 94px;
`;

const SmallDet = styled.p`

`;

const styles = StyleSheet.create({
    relatives: {
        position: 'relative'
    }
});


class SectionOne extends React.Component {
    render(){
        return(
            <Section className={css(styles.relatives)}>
                <Botwrap>
                    <TitleTeam>
                        <Xred>
                            X
                        </Xred>
                        iber inc.
                    </TitleTeam>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corporis vel facilis ipsa consectetur ratione harum praesentium nostrum! Dicta pariatur facere doloremque autem sit cupiditate ipsam assumenda itaque placeat consequatur.</p>
                </Botwrap>
            </Section>
        )
    }
}

export default SectionOne;