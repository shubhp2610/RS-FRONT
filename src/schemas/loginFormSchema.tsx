import * as Yup from "yup";

export interface LoginFormInputs {
    usrNm: string;
    psw: string;
}

export const LoginFormValidateSchema = Yup.object({
    usrNm: Yup.string()
        .required("Username is a required field")
        .matches(/^\s*\S[\s\S]*$/, "Username cannot contain only blankspaces"),
    psw: Yup.string().required("Password is a required field"),
}).required();
