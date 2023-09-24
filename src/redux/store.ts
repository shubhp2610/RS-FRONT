import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import rootReducer, { RootState } from "./reducers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };

        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export const getStore = () => {
    return configureStore({
        reducer,
    });
};

setupListeners(getStore().dispatch);

// export type AppDispatch = typeof getStore().dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
const makeStore: MakeStore<Store<RootState>> = () => {
    return getStore();
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
    debug: false,
});

export default makeStore;
