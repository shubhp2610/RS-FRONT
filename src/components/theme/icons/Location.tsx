import React from "react";

export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={11}
            height={16}
            fill="none"
            {...props}
        >
            <path
                fill="#CB0000"
                d="M5.5 0A5.492 5.492 0 0 0 .528 7.837c1.733 3.988 4.972 7.84 4.972 7.84s3.231-3.852 4.964-7.84c.34-.712.536-1.508.536-2.35A5.492 5.492 0 0 0 5.5 0Zm0 8.18a2.698 2.698 0 0 1-2.702-2.694A2.7 2.7 0 0 1 5.5 2.79a2.7 2.7 0 0 1 2.702 2.696A2.698 2.698 0 0 1 5.5 8.181Z"
            />
        </svg>
    );
};
