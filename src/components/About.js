import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { navsSelector } from '../reducers/nav';
import { getNavData, reset } from '../actions/nav';

class About extends Component {
    componentWillMount() {
        this.props.getNavData();
    }

    render() {
        const { navData } = this.props;
        console.log('Received Data =>', navData);
        return (
            <div>About Page description -> {navData ? navData.title : ''}</div>
        );
    }
}

About.propTypes = {
    getNavData: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    navData: PropTypes.object,
};

const mapStateToProps = state => ({
    ...navsSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getNavData, reset }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
