import createActionReducer, { createSelector, getInitialState } from '../util/createActionReducer';
import { FETCH_NAV_DETAILS, RESET } from '../constants';

const initialState = {
    ...getInitialState('navData'),
};

const ACTION_HANDLERS = {
    ...createActionReducer({ type: FETCH_NAV_DETAILS, stateKey: 'navData' }),
    [RESET]: () => (initialState),
};

export default function reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export const rootSelector = state => state.root;
// Selectors
const baseSelector = state => rootSelector(state).nav;
export const navsSelector = createSelector(baseSelector, 'navData');
