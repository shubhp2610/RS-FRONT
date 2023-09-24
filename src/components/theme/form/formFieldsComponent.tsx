import { DatePicker, Input } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { EyeIcon } from "../icons/eyeIcon";
import { OpenEyeIcon } from "../icons/openEyeIcon";

export const FormGroup: any = ({ children, className = "" }: any) => {
    return <div className={`ant-form-item ${className}`}>{children}</div>;
};

interface InputRadioFieldProps {
    register: any;
    formState: any;
    id: string;
    name: string;
    label?: string;
    value?: string | number;
    className?: string;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onClick?: any;
    defaultChecked?: boolean;
    checked?: boolean;
}
interface ReactAsyncSelectProps {
    register?: any;
    control?: any;
    label?: string;
    options?: any;
    isMulti?: boolean;
    isClearable?: boolean;
    loadOptions: any;
    id: any;
    formState?: any;
    defaultValue?: any;
    autoCapitalize?: any;
    className?: string;
    name: string;
    autoComplete?: boolean;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    type?: string;
    value?: any;
    onSelectChange?: (d: any) => void;
    formatOptionLabel?: any;
}
interface InputFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    prefix?: any;
    suffix?: any;
    addonBefore?: any;
    addonAfter?: any;
    autoFocus?: boolean;
    defaultChecked?: boolean;
    onChange?: (d: any) => void;
    onBlur?: (d: any) => void;
    onClick?: (d: any) => void;
}
interface CheckBoxFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    prefix?: any;
    suffix?: any;
    addonBefore?: any;
    addonAfter?: any;
    autoFocus?: boolean;
    defaultChecked?: boolean;
    onChange?: (d: any) => void;
    onBlur?: (d: any) => void;
    onClick?: (d: any) => void;
}

interface PhoneInputFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    required?: boolean;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    selected: any;
    countries?: any;
    medication?: any;
    customLabels: any;
    autoFocus?: boolean;
    onChange?: (d: any) => void;
    onBlur?: (d: any) => void;
    onSelect: (d: any) => void;
}

interface InputGoogleAutoCompleteFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    googleAutoCompleteConfig?: any;
}

interface InputAfterFieldProps {
    register: any;
    formState: any;
    id: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string;
    addonAfter: string;
    control: any;
}

interface InputDateFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    showError?: boolean;
    control?: any;
    dateFormat?: string;
    name?: string;
    disabled?: boolean;
    isDisabledDate?: boolean;
    setValue?: any;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    onChange?: (d: any) => void;
    allowClear?: boolean;
    fromDate?: any;
    picker?: string;
    IllnessFromDate?: any;
}
// interface TextAreaFieldProps {
//     register: any;
//     formState: any;
//     id: string;
//     type?: string;
//     label?: string;s
//     placeholder?: string;
//     defaultValue?: string;
//     className?: string;
//     autoCapitalize?: string;
//     autoComplete?: boolean;
//     minLength?: number;
//     maxLength?: number;
//     min?: number;
//     max?: number;
//     rows?: number;
//     showError?: boolean;
//     disabled?: boolean;
//     readOnly?: boolean;
// }
interface TimePickerInputFieldProps {
    register: any;
    formState: any;
    id: string;
    type?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}

interface TextAreaFieldProps {
    register: any;
    formState: any;
    id: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    autoCapitalize?: string;
    autoComplete?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    showError?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: number;
    type?: string;
    onChange?: (d: any) => void;
}

interface SelectFieldProps {
    register: any;
    formState: any;
    control: any;
    id: string;
    name: string;
    label?: string;
    defaultValue?: any;
    placeholder?: string;
    className?: string;
    onSelect?: (relationship: any) => void;
    autoCapitalize?: string;
    showError?: boolean;
    options?: any;
    isClearable?: boolean;
    isMulti?: boolean;
    autoComplete?: boolean;
    setValue?: any;
    disabled?: boolean;
    value?: any;
    onSelectChange?: (d: any) => void;
    formatOptionLabel?: any;
}

export const InputRadioField = (props: InputRadioFieldProps) => {
    const {
        register,
        formState,
        id,
        name,
        label,
        value,
        className = "",
        showError = true,
        disabled,
        readOnly,
        onClick,
        defaultChecked,
        checked,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[name] &&
            formState?.errors[name].message
        ) {
            setError(formState?.errors[name].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            <div className="flex items-center mr-2">
                <input
                    type="radio"
                    // {...register(name)}
                    {...{
                        id,
                        className: `${className} ${
                            error ? "ant-input-status-error" : ""
                        }`,
                        value,
                        disabled,
                        readOnly,
                        defaultChecked,
                        onClick,
                        checked,
                    }}
                />

                <label htmlFor={id} className="cursor-pointer ml-1 capitalize">
                    <span>{label}</span>
                </label>
            </div>
            {showError && error && (
                <span className="ant-typography ant-typography-danger block">
                    {error}
                </span>
            )}
        </>
    );
};

export const InputField = (props: InputFieldProps) => {
    const {
        register,
        formState,
        prefix,
        suffix,
        id,
        type = "text",
        label,
        placeholder,
        defaultValue,
        className,
        autoCapitalize,
        // addonBefore,
        autoComplete,
        minLength,
        maxLength,
        min,
        max,
        showError = true,
        disabled,
        readOnly,
        value,
        defaultChecked,
        onChange = null,
        onClick = null,
        onBlur,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1">
                    <label htmlFor={id} className="font-medium">
                        {label}
                    </label>
                </div>
            )}
            <div className="flex  items-center relative">
                {prefix && (
                    <span className="ant-input-prefix absolute z-[1] left-[10px]">
                        {prefix}
                    </span>
                )}
                <input
                    {...register(id)}
                    {...{
                        id,
                        type,
                        className: `ant-input input-field ${className} ${
                            prefix && "pl-10"
                        } ${error ? "ant-input-status-error" : ""}`,
                        // addonBefore,
                        defaultValue,
                        autoComplete,
                        placeholder,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        readOnly,
                        value,
                        defaultChecked,
                    }}
                    autoCapitalize="sentences"
                    onKeyUp={(e: any) => {
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    onBlur={(e: any) => {
                        if (onBlur) {
                            onBlur(e);
                        }
                    }}
                    onClick={(e: any) => {
                        if (onClick) {
                            onClick(e);
                        }
                    }}
                />
                {suffix && (
                    <span className="ant-input-suffix absolute z-[1] right-[10px]">
                        {suffix}
                    </span>
                )}
            </div>
            {showError && error && (
                <span className="ant-typography ant-typography-danger block mt-1">
                    {error}
                </span>
            )}
        </>
    );
};
export const CheckBoxField = (props: CheckBoxFieldProps) => {
    const {
        register,
        formState,
        id,
        label,
        defaultValue,
        className,
        showError = true,
        disabled,
        readOnly,
        value,
        defaultChecked,
        onChange = null,
        onClick = null,
        onBlur,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            <div className="flex items-center relative">
                <input
                    {...register(id)}
                    {...{
                        id,
                        className: `checkbox ${className}${
                            error ? "ant-input-status-error" : ""
                        }`,
                        defaultValue,
                        disabled,
                        readOnly,
                        value,
                        type: "checkbox",
                        defaultChecked,
                    }}
                    onKeyUp={(e: any) => {
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    onBlur={(e: any) => {
                        if (onBlur) {
                            onBlur(e);
                        }
                    }}
                    onClick={(e: any) => {
                        if (onClick) {
                            onClick(e);
                        }
                    }}
                />
                {label && (
                    <div className="block ml-2">
                        <label
                            htmlFor={id}
                            className="font-medium cursor-pointer"
                        >
                            {label}
                        </label>
                    </div>
                )}
            </div>
            {showError && error && (
                <span className="ant-typography ant-typography-danger block mt-1">
                    {error}
                </span>
            )}
        </>
    );
};

export const AddonAfterBeforeInputField = (props: InputFieldProps) => {
    const {
        register,
        formState,
        id,
        type = "text",
        label,
        placeholder,
        addonBefore,
        addonAfter,
        defaultValue,
        className,
        autoCapitalize,
        autoComplete,
        minLength,
        maxLength,
        min,
        max,
        showError = true,
        disabled,
        readOnly,
        value,
        onChange = null,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="ant-input-wrapper ant-input-group">
                {addonBefore && (
                    <span className="ant-input-group-addon h-[36px]">
                        {addonBefore}
                    </span>
                )}
                <input
                    {...register(id)}
                    {...{
                        id,
                        type,
                        className: `input-field ${className} ant-input ${
                            error ? "ant-input-status-error" : ""
                        }`,
                        defaultValue,
                        autoCapitalize,
                        autoComplete,
                        placeholder,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        readOnly,
                        value,
                        onChange,
                    }}
                />
                {addonAfter && (
                    <span className="ant-input-group-addon">{addonAfter}</span>
                )}
            </div>
            {showError && error && (
                <span className="ant-typography ant-typography-danger block mt-1">
                    {error}
                </span>
            )}
        </>
    );
};

export const InputDateField = (props: InputDateFieldProps) => {
    const {
        register,
        formState,
        id,
        label,
        placeholder,
        showError = true,
        control,
        dateFormat,
        name,
        className,
        disabled,
        isDisabledDate,
        disabledFuture,
        setValue,
        defaultValue = null,
        disabledPast = false,
        allowClear = false,
        onChange,
        fromDate,
        picker,
        IllnessFromDate,
    } = props;

    const [error, setError] = useState(null);
    const [date, setDate] = useState(defaultValue);

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        } else {
            setError(null);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);
    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="">
                <Controller
                    control={control}
                    name={id}
                    render={({ field }) => (
                        <DatePicker
                            {...register(id)}
                            onChange={(value, stringValue) => {
                                field.onChange(stringValue);
                                setDate(stringValue);
                                if (setValue) {
                                    setValue(`${id}`, stringValue);
                                }
                                if (onChange) {
                                    onChange(stringValue);
                                }
                            }}
                            format={dateFormat}
                            value={date && moment(date, dateFormat)}
                            // ref={field.ref}
                            disabledDate={(current) => {
                                if (isDisabledDate) {
                                    if (disabledPast === true) {
                                        return (
                                            current &&
                                            current <
                                                moment()
                                                    .subtract(1, "day")
                                                    .endOf("day")
                                        );
                                    } else {
                                        return (
                                            current &&
                                            current >
                                                moment()
                                                    .subtract(18, "years")
                                                    .endOf("day")
                                        );
                                    }
                                }
                                if (disabledFuture) {
                                    return (
                                        current &&
                                        current >
                                            moment()
                                                .subtract(1, "year")
                                                .endOf("year")
                                    );
                                } else if (fromDate) {
                                    return (
                                        current < moment(fromDate).add(1, "day")
                                    );
                                } else {
                                    return false;
                                }
                            }}
                            allowClear={allowClear}
                            defaultValue={defaultValue}
                            disabled={disabled}
                            className={`${className} ant-input input-border `}
                            inputReadOnly={false}
                            placeholder={placeholder}
                            picker={picker}
                            defaultPickerValue={
                                !fromDate && !defaultValue && !IllnessFromDate
                                    ? moment().subtract(18, "years")
                                    : defaultValue
                                    ? moment(defaultValue)
                                    : IllnessFromDate
                                    ? moment(IllnessFromDate)
                                    : null
                            }
                        />
                    )}
                />
                {showError && error && (
                    <span className="ant-typography ant-typography-danger block">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
};

export const InputPasswordField = (props: InputFieldProps) => {
    const {
        register,
        formState,
        id,
        label,
        prefix,
        placeholder,
        defaultValue,
        className,
        autoCapitalize,
        autoComplete,
        minLength,
        maxLength,
        min,
        max,
        showError = true,
        autoFocus = true,
        disabled,
        readOnly,
    } = props;
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className={`flex relative items-center`}>
                {prefix && (
                    <span className="ant-input-prefix absolute z-[1] left-[10px]">
                        {prefix}
                    </span>
                )}
                <input
                    {...register(id)}
                    {...{
                        id,
                        type: visible ? "text" : "password",
                        className: `ant-input input-field ${className} ${
                            prefix && "pl-10"
                        } ${error ? "ant-input-status-error" : ""}`,
                        defaultValue,
                        autoCapitalize,
                        autoComplete,
                        placeholder,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        readOnly,
                        autoFocus,
                    }}
                />
                <span className="ant-input-suffix absolute right-2.5 cursor-pointer z-[2]">
                    <span
                        role="img"
                        aria-label="eye-invisible"
                        tabIndex={-1}
                        // className="anticon anticon-eye-invisible ant-input-password-icon"
                        onClick={() => setVisible(!visible)}
                    >
                        {visible ? <OpenEyeIcon /> : <EyeIcon />}
                    </span>
                </span>
            </div>
            {showError && error && (
                <span className="ant-typography ant-typography-danger block mt-1">
                    {error}
                </span>
            )}
        </>
    );
};
export const TextAreaField = (props: TextAreaFieldProps) => {
    const {
        register,
        formState,
        id,
        label,
        placeholder,
        defaultValue,
        className = "ant-input !h-[68px]",
        autoCapitalize,
        autoComplete,
        minLength,
        rows,
        maxLength,
        min,
        max,
        showError = true,
        disabled,
        readOnly,
        onChange = null,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="">
                <textarea
                    {...register(id)}
                    {...{
                        id,
                        className: `${className} ${
                            error ? "ant-input-status-error" : ""
                        }`,
                        defaultValue,
                        autoCapitalize,
                        autoComplete,
                        placeholder,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        rows,
                        readOnly,
                    }}
                    onKeyUp={(e: any) => {
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                />
                {showError && error && (
                    <span className="ant-typography ant-typography-danger block">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
};

export const SelectField = (props: SelectFieldProps) => {
    const {
        formState,
        id,
        control,
        name,
        register,
        label,
        placeholder,
        defaultValue,
        showError = true,
        options,
        disabled,
        isClearable = true,
        className = "ant-react-select",
        isMulti,
        onSelectChange,
        formatOptionLabel,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (isMulti) {
            if (
                formState &&
                formState?.errors &&
                formState?.errors[id] &&
                formState?.errors[id]?.message
            ) {
                setError(formState?.errors[id]?.message);
            }
        } else {
            if (
                formState &&
                formState?.errors &&
                formState?.errors[id] &&
                formState?.errors[id]?.label?.message
            ) {
                setError(formState?.errors[id]?.label?.message);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="">
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <Select
                            {...register(id)}
                            className={`${className}`}
                            defaultValue={defaultValue}
                            placeholder={placeholder}
                            isClearable={isClearable}
                            formatOptionLabel={formatOptionLabel}
                            isMulti={isMulti}
                            options={options}
                            isDisabled={disabled}
                            onChange={(value) => {
                                field.onChange(value);
                                if (onSelectChange) {
                                    onSelectChange(value);
                                }
                            }}
                            value={field.value}
                            ref={field.ref}
                            classNamePrefix={`ant-react-select${
                                error ? " ant-input-status-error" : ""
                            }`}
                        />
                    )}
                />
                {showError && error && (
                    <span className="ant-typography ant-typography-danger block">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
};

export const InputAfterField = (props: InputAfterFieldProps) => {
    const {
        register,
        formState,
        id,
        label,
        placeholder,
        defaultValue,
        className = "ant-input input-border",
        showError = true,
        disabled,
        readOnly = false,
        value,
        addonAfter,
        control,
    } = props;
    const [error, setError] = useState(null);
    useEffect(() => {
        if (
            formState &&
            formState?.errors &&
            formState?.errors[id] &&
            formState?.errors[id].message
        ) {
            setError(formState?.errors[id].message);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {
            setError(null);
        };
    }, [formState]);

    return (
        <>
            {label && (
                <div className="block pb-1 font-medium">
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div className="">
                <Controller
                    control={control}
                    name={id}
                    render={({ field }) => (
                        <Input
                            {...register(id)}
                            {...{
                                id,
                                className: `${className} ${
                                    error ? "ant-input-status-error" : ""
                                }`,
                                defaultValue,
                                placeholder,
                                disabled,
                                readOnly,
                                value,
                                addonAfter,
                            }}
                        />
                    )}
                />
                {showError && error && (
                    <span className="ant-typography ant-typography-danger block">
                        {error}
                    </span>
                )}
            </div>
        </>
    );
};

export const InputReactSelectFieldAsync = (props: ReactAsyncSelectProps) => {
    const {
        options,
        isMulti,
        isClearable,
        loadOptions,
        id,
        label,
        name,
        className = "ant-react-select",
        // onChange,
        placeholder,
        register,
        formState,
        showError = true,
        control,
        onSelectChange,
        formatOptionLabel,
    } = props;
    {
        const [error, setError] = useState(null);
        useEffect(() => {
            if (isMulti) {
                if (
                    formState &&
                    formState?.errors &&
                    formState?.errors[id] &&
                    formState?.errors[id]?.message
                ) {
                    setError(formState?.errors[id]?.message);
                }
            } else {
                if (
                    formState &&
                    formState?.errors &&
                    formState?.errors[id] &&
                    formState?.errors[id]?.name?.message
                ) {
                    setError(formState?.errors[id]?.name?.message);
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => {
                setError(null);
            };
        }, [formState]);
        return (
            <>
                {label && (
                    <div className="block pb-1 font-medium">
                        <label htmlFor={id}>{label}</label>
                    </div>
                )}
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <AsyncSelect
                            {...register(id)}
                            options={options || []}
                            cacheOptions
                            className={className}
                            defaultOptions
                            getOptionLabel={(e: any) => e.name}
                            loadOptions={loadOptions}
                            formatOptionLabel={formatOptionLabel}
                            onChange={(value) => {
                                field.onChange(value);
                                if (onSelectChange) {
                                    onSelectChange(value);
                                }
                            }}
                            placeholder={placeholder}
                            isMulti={isMulti}
                            isClearable={isClearable}
                            ref={field.ref}
                            value={field.value}
                            classNamePrefix={`ant-react-select${
                                error ? " ant-input-status-error" : ""
                            }`}
                        />
                    )}
                />
                {showError && error && (
                    <span className="ant-typography ant-typography-danger block">
                        {error}
                    </span>
                )}
            </>
        );
    }
};
