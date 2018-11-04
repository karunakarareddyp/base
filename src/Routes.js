import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import { compact } from 'underscore';
import Home from './components/Home';
import About from './components/About';

function buildUrl(...args) {
    return `/${compact(args.map(item => (item ? item.toString().replace(/^\/|\/$/g, '') : undefined))).join('/')}`;
}

const Routes = ({ match }) => (
    <Switch>
        <Route exact path={buildUrl(match.url, '/')} component={Home}/>
        <Route path={buildUrl(match.url, '/about')} component={About}/>
    </Switch>
);

Routes.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }),
};

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Routes));
