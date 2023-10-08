import React from "react";
import { LocationIcon } from "@components/theme/icons/Location";
import { BedsIcon } from "@components/theme/icons/BedsIcon";
import { BathIcon } from "@components/theme/icons/BathIcon";
import { LevelsIcon } from "@components/theme/icons/LevelsIcon";
import { SqtIcon } from "@components/theme/icons/SqtIcon";
import Link from "next/link";

export const PropertyGallery = ({ data }: any) => {
    return (
        <>
            {data &&
                data.length > 0 &&
                data.map((d: any, index: number) => (
                    <div
                        className="zoom relative overflow-hidden h-[270px] shadow-lg bg-[50%]"
                        key={index}
                    >
                        <img
                            src={d}
                            className="w-full object-cover h-full transition duration-300 ease-linear"
                        />
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]"></div>
                        <div>
                            <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                        </div>
                    </div>
                ))}
        </>
    );
};
