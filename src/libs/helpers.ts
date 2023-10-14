import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { NextPageContext } from "next";
import Router from "next/router";

let axiosInstance: AxiosInstance | null = null;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const deepClone = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};

const API = (force = false): AxiosInstance => {
    if (axiosInstance && !force) {
        return axiosInstance;
    }

    axiosInstance = axios.create({
        baseURL: `${process.env.NEXT_API_ENDPOINT}`,
    });

    return axiosInstance;
};

const fetch: (config: AxiosRequestConfig) => Promise<any> = async (config) => {
    try {
        const response = await API().request(config);
        return response?.data;
    } catch (e: any) {
        if (
            e?.error?.response &&
            e?.error?.response?.data &&
            e?.error?.response?.data?.message
        ) {
            throw new Error(
                e.error.response.data.message || "Bad response from server",
            );
        } else {
            throw new Error(e?.error?.message || "Bad response from server");
        }
    }
};

const nextRedirect = ({
    ctx = {},
    location,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ctx?: NextPageContext | any;
    location: string;
}) => {
    if (typeof window === "undefined" && ctx?.res) {
        ctx.res.writeHead(301, {
            Location: location,
        });
        ctx.res.end();
    } else {
        Router.replace(location);
    }
};

const getPhoneNumberFormat = (value: string) => {
    const regex = new RegExp("^[0-9, ]*$", "g");
    if (regex.test(value)) {
        const str = value
            .split(/(\d{3})(\d{3})(\d{4})/)
            .join(" ")
            .trim();
        return str;
    } else {
        const val: any = value?.match(/\d/g);
        if (val) {
            return val.join("");
        }
    }
};

const onClickOfBackToTop = (scrollableId?: any) => {
    const backToTop: any = document.getElementById(
        scrollableId ? `${scrollableId}` : "scrollableDiv",
    );
    backToTop.scrollTo({ top: 0, behavior: "smooth" });
};

export {
    fetch,
    API,
    deepClone,
    nextRedirect,
    getPhoneNumberFormat,
    onClickOfBackToTop,
};
