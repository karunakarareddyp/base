import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'underscore';
import PulseLoader from 'react-spinners/PulseLoader';

function AsyncContainer({ loading, children, render }) {
    if (loading) {
        return <PulseLoader />;
    }
    const babies = children || render;
    return isFunction(babies) ? babies() : babies;
}

/**
 * Wrap any element in `AsyncContainer` to delay rendering until the data is loaded.
 * It doesn't load data, just defers rendering.
 */
AsyncContainer.propTypes = {
    loading: PropTypes.bool.isRequired,

    /**
     * Rendered when loading is falsy. Either `children` or `render is required.
     */
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
    ]),

    /**
     * Rendered when loading is falsy. Either `children` or `render is required.
     */
    render: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
    ]),
};

AsyncContainer.defaultProps = {
    loading: false,
};

export default AsyncContainer;
