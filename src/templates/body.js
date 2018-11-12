import React, { Components } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import {StyleSheet, css} from 'aphrodite';

// Sections
import SectionOne from '../sections/one.js';
import SectionTwo from '../sections/two.js';
import SectionThree from '../sections/three.js';
import SectionFour from '../sections/four.js';

const styles = StyleSheet.create({
    sectioncontainer: {
        width: '85%',
        margin: '0 auto'
    }
});

class MainBody extends React.Component {
    render(){
        let options = {
            sectionClassName:     'section sectioncontainer',
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPadding:    '50px',
            arrowNavigation:      true
          };
        return(
            <SectionsContainer {...options}>
                <SectionOne/>
                <SectionTwo />
                <SectionThree />
                <SectionFour/>
            </SectionsContainer>
        )
    }
}

export default MainBody;