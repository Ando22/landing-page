import React, { Component } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import styled, { injectGlobal } from "styled-components";

//plugin
import 'bootstrap/dist/css/bootstrap.css';

// Styles
import './Assets/css/default.min.css';

// Scripts
import './scripts/script.js';

// Component
import Header from './templates/header.js';
import Logo from './templates/logo.js';
import MainBody from './templates/body.js';
// import Preloader from './templates/load.js';

class App extends Component {
  render() {

    return (
      <div>

        <Header/>

        <Logo/>

        <MainBody />
        
      </div>
    );
  }
}


export default App;
   