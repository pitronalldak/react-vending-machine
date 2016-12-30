import objectAssign from 'object-assign';

import {
    HANDLE_UPLOAD_PANEL_LINK,
    GET_PRODUCTS,
    SET_PRODUCTS,
    SET_PRODUCT_TO_BASKET,
    SET_PAYMENT
} from '../actions/main';

const initialState = {
    showUploadPanel: false,
    products: [],
    balance: 0,
    basketProducts: []
};

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_UPLOAD_PANEL_LINK:
            return objectAssign({}, state, {showUploadPanel: !state.showUploadPanel});
        case GET_PRODUCTS:
            return objectAssign({}, state, {products: action.payload});
        case SET_PRODUCTS:
            return objectAssign({}, state, {products: action.payload});
        case SET_PRODUCT_TO_BASKET: {
            const products = state.products;
            const product = products.find(p => p.id == action.payload);
            products.find(p => p.id == action.payload).amount --;
            const basketProducts = state.basketProducts;
            const balance = state.balance - product.price;
            basketProducts.push({id: product.id, title: product.title})
            return objectAssign({}, state, {basketProducts}, {balance}, {products});
        }
        case SET_PAYMENT:
            return objectAssign({}, state, {balance: action.payload});
        default:
            return state;
    }
}

export default mainReducer;
