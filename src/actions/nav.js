import actionsFor from '../util/actionsFor';
import { FETCH_NAV_DETAILS, RESET } from '../constants';

export const getNavData = () => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const { dispatchStart, dispatchSuccess, dispatchError } = actionsFor(FETCH_NAV_DETAILS, dispatch);
    dispatchStart();

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data);
            dispatchSuccess(data);
        })
        .catch(dispatchError);
};

export const reset = () => ({ type: RESET });
