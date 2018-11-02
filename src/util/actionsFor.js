import { isString, isFunction } from 'underscore';
import { getSuccessActionType, getStartedActionType, getErrorActionType } from './actionGenerators';

const counters = {};

const logDroppedResponses = (tracer, type, baseType) => {
    console.debug(`Skipped store update for action: "${type}". Waiting for request #${counters[baseType]}; this is #${tracer}.`);
};

export default function actionsFor(type, dispatch, { takeLatestForType = true } = {}) {
    if (!isString(type)) {
        throw new Error('"type" argument is required and should be a string');
    }

    if (!isFunction(dispatch)) {
        throw new Error('"dispatch" argument is required and should be Store#dispatch (Redux)');
    }

    if (takeLatestForType) {
        counters[type] = counters[type] || 0;
        counters[type] += 1;
    }

    const tracer = counters[type];

    return {
        dispatchStart: () => dispatch({ type: getStartedActionType(type) }),
        dispatchSuccess(payload) {
            if (takeLatestForType && tracer !== counters[type]) {
                logDroppedResponses(tracer, getSuccessActionType(type), type);
                return undefined;
            }

            dispatch({ type: getSuccessActionType(type), payload });
            return payload;
        },
        dispatchError(error) {
            if (takeLatestForType && tracer !== counters[type]) {
                logDroppedResponses(tracer, getErrorActionType(type), type);
                return undefined;
            }

            console.error(error);
            dispatch({ type: getErrorActionType(type), payload: error, error: true });
            return error;
        },
    };
}
