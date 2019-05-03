import axios from 'axios';
import * as data from '../../assets/Data/product.json';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    product: data.default,
    detailedProduct: undefined
}

const getCurrentProduct = (state, action) => {
    const updatedState = {
        product: data.default,
        detailedProduct: action.currentProd
    }
    return updateObject(state, updatedState);
}

const reducer = (state=initialState, action ) =>{
    switch(action.type){
        case actionTypes.CURRENT_PRODUCT : return getCurrentProduct(state, action);
        default: return state
    }
}

export default reducer;