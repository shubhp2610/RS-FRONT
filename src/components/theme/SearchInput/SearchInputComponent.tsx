import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import SearchInputStyles from "./SearchInput.module.scss";

export interface SearchInputComponentProps {
    handleSearch?: (d?: any) => void;
    placeholder?: string;
    type?: string;
}

export const SearchInputComponent = (props: SearchInputComponentProps) => {
    const { handleSearch, placeholder, type = "text" } = props;
    return (
        <div className={SearchInputStyles.searchField}>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={(e: any) => {
                    if (typeof handleSearch === "function") {
                        handleSearch(e);
                    }
                }}
                allowClear
                prefix={<SearchOutlined />}
            />
        </div>
    );
};
