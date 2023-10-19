import { PLACED_ORDER } from "./order.types";

const orderInitialState = {
    loading: false,
    error: false,
    order: [],
};


export const orderReducer = (state = orderInitialState, action) => {
    const { type, payload } = action;
    switch (type){
        case PLACED_ORDER: {
            return {
                ...state,
                order: [...state.order, payload],
            };
        }
        default: {
            return state;
        }
    }
};