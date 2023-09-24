import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = ({ className, size = 24 }: any) => {
    const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

    return <Spin indicator={antIcon} className={className} />;
};

export default Spinner;
