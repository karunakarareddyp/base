export const actionNamespacer = namespace => actionType => `${namespace.toUpperCase()}/${actionType}`;

const ns = actionNamespacer('STORESERV_DETAILS');
export const FETCH_NAV_DETAILS = ns('FETCH_NAV_DETAILS');
export const RESET = ns('RESET');
