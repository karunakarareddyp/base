export const getStartedActionType = rootType => rootType;

export const getSuccessActionType = rootType => `${rootType}_SUCCEEDED`;

export const getErrorActionType = rootType => `${rootType}_FAILED`;
