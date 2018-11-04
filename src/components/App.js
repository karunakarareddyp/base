import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from '../Routes';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Routes {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(App));
