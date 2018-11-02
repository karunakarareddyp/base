import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowseRouter from 'react-router-dom/BrowserRouter';
import Routes from '../Routes';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <BrowseRouter>
                <React.Fragment>
                    <Nav/>
                    <Routes />
                </React.Fragment>
            </BrowseRouter>
        );
    }
}

export default connect(state => state)(App);
