import * as actionTypes from './actionTypes';

export const getCurrentProduct = ( prod ) => {
    return {
        type: actionTypes.CURRENT_PRODUCT,
        currentProd: prod
    };
};