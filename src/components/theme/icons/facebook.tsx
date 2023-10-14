import React from "react";

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    fill="currentColor"
                    d="M9.787 19v-6.57H8v-2.364h1.787v-2.02C9.787 6.457 10.842 5 13.274 5c.985 0 1.713.092 1.713.092L14.93 7.3s-.743-.007-1.553-.007c-.877 0-1.018.393-1.018 1.046v1.727H15l-.114 2.365h-2.526V19H9.787Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="currentColor" d="M8 5h7v14H8z" />
                </clipPath>
            </defs>
        </svg>
    );
};
