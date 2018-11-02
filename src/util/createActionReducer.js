import { pick, flatten } from 'underscore';
import { createSelector as createMemoizedSelector } from 'reselect';
import { getErrorActionType, getStartedActionType, getSuccessActionType } from './actionGenerators';

function getKeys(stateKey) {
    const baseKey = `${stateKey.charAt(0).toUpperCase()}${stateKey.slice(1)}`;

    return {
        valueKey: stateKey,
        loadingKey: `loading${baseKey}`,
        loadedKey: `loaded${baseKey}`,
        errorKey: `error${baseKey}`,
    };
}

function getKeysArray(stateKey) {
    return Object.values(getKeys(stateKey));
}

export function createSelector(baseSelector, ...keys) {
    const stateKeys = flatten(keys.map(getKeysArray));
    return createMemoizedSelector(baseSelector, selectedState => pick(selectedState, ...stateKeys));
}

export function getInitialState(stateKey) {
    const { loadingKey, loadedKey, errorKey } = getKeys(stateKey);

    return {
        [stateKey]: undefined,
        [loadingKey]: false,
        [loadedKey]: false,
        [errorKey]: false,
    };
}

export default function createActionReducer({ type, stateKey }) {
    const { loadingKey, loadedKey, errorKey } = getKeys(stateKey);

    return {
        [getStartedActionType(type)]: state => ({
            ...state,
            [stateKey]: null,
            [loadingKey]: true,
            [loadedKey]: false,
            [errorKey]: false,
        }),
        [getSuccessActionType(type)]: (state, { payload }) => ({
            ...state,
            [stateKey]: payload,
            [loadingKey]: false,
            [loadedKey]: true,
            [errorKey]: false,
        }),
        [getErrorActionType(type)]: (state, { payload: error }) => ({
            ...state,
            error,
            [loadingKey]: false,
            [loadedKey]: false,
            [errorKey]: true,
        }),
    };
}
