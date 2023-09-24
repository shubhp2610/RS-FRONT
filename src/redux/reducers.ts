import { combineReducers } from "redux";
import { dashboardSlice } from "./slices/dashboard/index";

const rootReducer = combineReducers({
    dashboard: dashboardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
