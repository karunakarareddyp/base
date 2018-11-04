import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './styles.scss';
import getStore from './store';

// TODO - Configure history if required
ReactDOM.render(
    <Provider store={getStore()}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

module.hot.accept();
