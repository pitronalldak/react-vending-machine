import fetch from 'isomorphic-fetch';

export const HANDLE_UPLOAD_PANEL_LINK = 'HANDLE_UPLOAD_PANEL_LINK';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_TO_BASKET = 'SET_PRODUCT_TO_BASKET';
export const SET_PAYMENT = 'SET_PAYMENT';

export default class Actions {

    handleUploadLink = () => {
        return {
            type: HANDLE_UPLOAD_PANEL_LINK,
        };
    };

    getProducts = () => {
        return dispatch => {
            fetch('src/assets/mock.json', { method: 'GET' })
                .then(response => (response.json()))
                .then(json => {dispatch({type: GET_PRODUCTS, payload: json})})
        };
    };

    setProducts = (products) => {
        return {
            type: SET_PRODUCTS,
            payload: products
        };
    };

    setToBasket = (id) => {
        return {
            type: SET_PRODUCT_TO_BASKET,
            payload: id
        };
    }

    setPayment = (value) => {
        return {
            type: SET_PAYMENT,
            payload: value
        };
    };
}
