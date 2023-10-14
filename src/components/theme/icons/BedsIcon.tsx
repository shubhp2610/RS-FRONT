import React from "react";

export const BedsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={800}
            height={800}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                stroke="#CB0000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5v14m0-3h18m0 3v-5.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 10 18.92 10 17.8 10H11v5.727M7 12h.01M8 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            />
        </svg>
    );
};
