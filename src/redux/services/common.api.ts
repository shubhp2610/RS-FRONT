import { fetch } from "src/libs/helpers";

export const getPreSignedUrlAPI = (key: any): Promise<any> => {
    return fetch({
        url: `/common/file/pre-sign-url?key=${key}`,
        method: "GET",
        params: key,
    });
};
export const stopImpersonateAPI = (): Promise<any> => {
    return fetch({
        url: `/patient/impersonate/exit`,
        method: "POST",
    });
};
