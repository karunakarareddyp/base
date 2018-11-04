import React, { Component } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { navsSelector } from '../reducers/nav';
import { getNavData, reset } from '../actions/nav';
import AsyncContainer from '../util/component/AsyncContainer';

class About extends Component {
    componentWillMount() {
        this.props.getNavData();
    }

    render() {
        const { navData, loadingNavData } = this.props;
        console.log('Received Data =>', navData);
        const data = navData || [];
        return (
            <AsyncContainer loading={loadingNavData}>
                <div>Employees data <ul>{
                    data.map(emp => <li key={emp.id}>{emp.name}</li>)
                }</ul></div>
            </AsyncContainer>
        );
    }
}

About.propTypes = {
    getNavData: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    navData: PropTypes.array,
    loadingNavData: PropTypes.bool,
};

const mapStateToProps = state => ({
    ...navsSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ getNavData, reset }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
