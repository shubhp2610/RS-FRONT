import React from "react";

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={31}
            height={23}
            fill="none"
            {...props}
        >
            <path
                fill="#000"
                fillRule="evenodd"
                d="M0 1.15C0 .515.496 0 1.107 0H15.5c.612 0 1.107.515 1.107 1.15 0 .635-.495 1.15-1.107 1.15H1.107C.496 2.3 0 1.785 0 1.15ZM0 11.5c0-.635.496-1.15 1.107-1.15h28.786c.611 0 1.107.515 1.107 1.15 0 .635-.496 1.15-1.107 1.15H1.107C.496 12.65 0 12.135 0 11.5Zm1.107 9.2C.496 20.7 0 21.215 0 21.85 0 22.485.496 23 1.107 23h28.786c.611 0 1.107-.515 1.107-1.15 0-.635-.496-1.15-1.107-1.15H1.107Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
