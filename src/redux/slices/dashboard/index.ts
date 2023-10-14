import { getDashboardListAPI } from "@redux/services/dashboard.api";
import { createSlice } from "@reduxjs/toolkit";
import { deepClone } from "src/libs/helpers";

export interface DashboardServiceObj {
    id: string;
    nm: string;
    prc: number;
    img: string;
    isNoCost: boolean;
    isTokenEligible?: boolean;
    srTp: string;
}

export interface DashboardListData {
    services: DashboardServiceObj[];
}

export interface DataObject {
    total: number;
    count: number;
    hasMany: boolean;
    list: DashboardListData[];
}

export interface DashboardResponseObject {
    message: string;
    result: DataObject;
}

export interface DashboardResponseSuccess {
    data: DashboardResponseObject;
}

export interface DashboardListState {
    data?: DashboardResponseSuccess | any;
    isLoading?: boolean;
    error?: string | null;
}

const dashboardInitialState: DashboardListState = {
    data: {},
    error: null,
    isLoading: false,
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: deepClone(dashboardInitialState),
    reducers: {
        dashboardStarted: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        dashboardSuccess: (state, action) => {
            return {
                ...state,
                ...{
                    data: action.payload,
                    error: null,
                    isLoading: false,
                },
            };
        },
        dashboardFail: (state, action) => {
            return {
                ...state,
                ...{ error: action.payload, isLoading: false },
            };
        },
        dashboardReset: () => {
            return deepClone(dashboardInitialState);
        },
    },
});

export const {
    dashboardStarted,
    dashboardSuccess,
    dashboardFail,
    dashboardReset,
} = dashboardSlice.actions;

export const fetchDashboard = () => async (dispatch: any) => {
    dispatch(dashboardStarted());
    try {
        const dashList: DashboardResponseSuccess = await getDashboardListAPI();
        if (dashList) {
            dispatch(dashboardSuccess(dashList));
        }
    } catch (e: any) {
        dispatch(dashboardFail(e.message));
    }
};
