import { ADD_TO_CART, applyCoupon } from "./actionType";



let initialState = {
    loading: false,
    error: false,
    cart: [],
    coupon: 0
};

export const CartReducer = (state = initialState, { type,payload}) => {
    switch(type){
        case applyCoupon: {
            return {
                ...state,
                coupon: payload
            };
        }
        case ADD_TO_CART: {
            const { cart } = state;
            const product = payload;
            const existingItem = cart.findIndex((item) => item._id === product._id);
        }
    }
}