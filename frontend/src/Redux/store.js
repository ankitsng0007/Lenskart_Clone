import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./CartPage/reducer";
 import { orderReducer } from "./Order/order.reducer";
import { wishlistReducer } from "./Wishlist/wishlist.reducer";


const rootReducer = combineReducers({
    CartReducer,
    wishlistManager: wishlistReducer,
    orderManager: orderReducer
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);