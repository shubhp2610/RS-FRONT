import { Spin } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import React from "react";
import defaultSkeletonStyles from "./defaultSkeleton.module.scss";

interface DefaultSkeletonProps {
    isContent?: boolean;
    tip?: boolean;
    isTableContent?: boolean;
}
export const DefaultSkeleton = (props: DefaultSkeletonProps) => {
    const { isContent = false, tip = true, isTableContent = false } = props;
    return (
        <div
            className={`${defaultSkeletonStyles.wrapper} ${
                isContent ? defaultSkeletonStyles.layoutLoader : ""
            } ${isTableContent ? defaultSkeletonStyles.TableWrapper : ""}`}
        >
            <div className={defaultSkeletonStyles.backdrop}></div>
            <div className={defaultSkeletonStyles.preLoader}>
                <Spin
                    {...(tip && {
                        tip: "Loading...",
                        className: "font-medium",
                    })}
                ></Spin>
                {/* <span>loading...</span> */}
            </div>
        </div>
    );
};
