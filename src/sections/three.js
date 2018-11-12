import React, { Components } from 'react';
import {Section} from 'react-fullpage';

const welcome = "Halo Section 3";

class SectionThree extends React.Component {
    render(){
        return(
            <Section> 
                <h1>{welcome}</h1>
            </Section>
        )
    }
}

export default SectionThree;