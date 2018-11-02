import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers/root';

const reducer = combineReducers({
    root,
});

const getStore = (initialState = {}) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk),
    );

    return store;
};

export default getStore;
