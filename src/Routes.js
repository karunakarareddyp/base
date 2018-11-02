import React, { Component } from 'react';
import {
    Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Redirect to='/'/>
            </Switch>
        );
    }
}
export default withRouter(Routes);
